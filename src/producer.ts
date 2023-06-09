import Bull from 'bull'
import { options } from './config'
import { Order } from './types'
const names = require('random-names-generator')

export function runProducer() {
  const queueName = 'order-list'

  // producerQueue is the "waiter" who add customer order to order-list queue
  const producerQueue = new Bull(queueName, options)

  for (let i = 1; i <= 10; i++) {
    const orderDetail: Order = {
      tableNumber: i,
      customer: names.random(),
      order: {
        iceTea: Math.floor(Math.random() * i)
      }
    }

    console.log(`adding order for table number "${i}" with order detail ${JSON.stringify(orderDetail)}`)

    // adding customer order to order-list
    producerQueue.add(orderDetail)
    setTimeout(() => true, 1000)
  }

}