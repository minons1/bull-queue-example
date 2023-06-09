import Bull from "bull"
import { options } from "./config"
import { Order } from "./types"

export function runConsumer() {
  const queueName = 'order-list'

  // consumerQueue is the "chef" who will process customer order in order-list queue
  const consumerQueue = new Bull(queueName, options)
  consumerQueue.process(processOrder)

}

async function processOrder(job: Bull.Job<Order>): Promise<string> {
  console.log(`=== processing order for table number ${job.data.tableNumber} ===`)
  console.log(`Customer "${job.data.customer}" order "${JSON.stringify(job.data.order)} in table number "${job.data.tableNumber}"`)

  return Promise.resolve('Success')
}