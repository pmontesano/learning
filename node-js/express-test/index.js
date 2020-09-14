const express = require('express')
const app = express()

 
app.get('*', function (req, res, next) {
  

	res.locals.pepe = 'nada'
  next()
})
 
app.get('/', function (req, res) {
  res.send('Hello World'+res.locals.pepe)
})
 



var diego = require('./diego');

app.use('/gg', diego);




app.listen(3000)