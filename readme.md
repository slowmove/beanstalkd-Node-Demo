Beanstalkd Node Demo Application
===

This is a demo application and to not have any use more than showing how easy it is to add and receive data from a beanstalkd work queue.

## install

Install beanstalkd to use as work queue.
On debian derivates, i.e. Ubuntu

```shell
sudo apt-get install beanstalkd
```

Install dependencies

```shell
npm install
```

## run

Start the beanstalkd daemon

```shell
service beanstalkd start
```

run app.js to create dummy data in the queue

```shell
node app.js
```

run worker.js to start watching the queue and work thru the items

```shell
node worker.js
```

When the worker is watching the queue you can send in data in any way yoou want and it will take it.