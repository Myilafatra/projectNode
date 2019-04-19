const express = require('express')
var cors = require('cors')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))

const rout = require('./Route/route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
rout(app)

app.listen(8080, function () {
  console.log('server demarer')
})
app.use('/', router)