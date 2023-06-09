import Bull from "bull"

export const options: Bull.QueueOptions = {
  redis: {
    port: parseInt(process.env.REDIS_PORT || '6379'),
    host: process.env.REDIS_HOST || '127.0.0.1',
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    ...process.env.REDIS_PASSWORD ? {
      password: process.env.REDIS_PASSWORD
    } : {}
  },
}