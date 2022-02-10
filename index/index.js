const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send('index')
})

app.listen(3000, (err) => {
  if (err) {
    console.error('Startup failed', err)
  } else {
    console.log('Listening')
  }
})