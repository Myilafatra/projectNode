const express = require('express')
var cors = require('cors')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser');

const rout = require('./Route/route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
rout(app)

app.listen(8080, function () {
  console.log('server demarer')
})
app.use('/', router)