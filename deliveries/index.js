const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  res.render('index', {})
})

app.listen(3002, (err) => {
  if (err) {
    console.error('Startup failed', err)
  } else {
    console.log('Listening')
  }
})