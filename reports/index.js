const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send('reports')
})

app.listen(3004, (err) => {
  if (err) {
    console.error('Startup failed', err)
  } else {
    console.log('Listening')
  }
})