# Bull Queue Example
Implementing a simple queue with Bull in Node.js, using producer-consumer pattern.

## Setup your environment
1. Install Redis https://redis.io/docs/getting-started/
2. Install Node.js (using nvm is recommended) https://github.com/nvm-sh/nvm#installing-and-updating
3. Install Yarn https://classic.yarnpkg.com/en/docs/install#debian-stable
4. Install package dependencies
```
yarn install
```
5. Build the project
```
yarn build
```
6. Run the project
```
yarn start
```

> If you want to simulate producer and consumer in different processes, you can comment one from `runProducer` and `runConsumer` in `src/index.ts` and run the project in two different terminals.


