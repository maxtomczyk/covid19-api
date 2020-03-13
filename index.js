const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const helmet = require('koa-helmet')
const cors = require('@koa/cors')
const sync = require('./cron')

const cases = require('./routes/cases/router')

const app = new Koa()
app.use(bodyParser())
app.use(helmet())
app.use(cors())

app.use(cases.middleware())

sync.start()
sync.syncAll()

app.listen(process.env.PORT || 3000)
