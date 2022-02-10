const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware')

app.set('view engine', 'ejs')

app.use('/cashup', createProxyMiddleware({ 
  target: 'http://localhost:3001', 
  changeOrigin: true,
  pathRewrite: {'^/cashup' : ''}
}))

app.use('/deliveries', createProxyMiddleware({ 
  target: 'http://localhost:3002', 
  changeOrigin: true,
  pathRewrite: {'^/deliveries' : ''}
}))

app.use('/drivers', createProxyMiddleware({ 
  target: 'http://localhost:3003', 
  changeOrigin: true,
  pathRewrite: {'^/drivers' : ''}
}))

app.use('/reports', createProxyMiddleware({ 
  target: 'http://localhost:3004', 
  changeOrigin: true,
  pathRewrite: {'^/reports' : ''}
}))

app.get('/', (req,res) => {
  res.render('index', {})
})

app.listen(3000, (err) => {
  if (err) {
    console.error('Startup failed', err)
  } else {
    console.log('Listening')
  }
})