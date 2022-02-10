const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send('cashup')
})

app.listen(3001, (err) => {
  if (err) {
    console.error('Startup failed', err)
  } else {
    console.log('Listening')
  }
})