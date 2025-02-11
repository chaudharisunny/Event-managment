const express = require('express')
const app = express()
const port = 3000
const indexRoutes=require('./routes/index')
const bodyParser=require('body-parser')
const db=require('./model/db')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',indexRoutes)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(` app listening on port ${port}!`))