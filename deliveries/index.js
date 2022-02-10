const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send('deliveries')
})

app.listen(3002, (err) => {
  if (err) {
    console.error('Startup failed', err)
  } else {
    console.log('Listening')
  }
})