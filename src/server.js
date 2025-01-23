const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send({
    data: 'Hello World!'
  })
})

app.listen(port, () => {
  console.log(`La aplicacion esta en Linea! ${port}`)
})