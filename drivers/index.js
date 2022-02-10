const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send('drivers')
})

app.listen(3003, (err) => {
  if (err) {
    console.error('Startup failed', err)
  } else {
    console.log('Listening')
  }
})