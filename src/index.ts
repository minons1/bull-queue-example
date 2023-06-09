import 'source-map-support/register'
require('dotenv').config({ path: '.env' })

import { runProducer } from './producer'
import { runConsumer } from './consumer'

(() => {
  runProducer()

  runConsumer()
})()