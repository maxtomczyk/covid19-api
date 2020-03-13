const Router = require('koa-joi-router')
const api = require('./api')

const Joi = Router.Joi
const cases = Router()

cases.prefix('/api/cases')

cases.route({
  method: 'get',
  path: '/:code',
  handler: [api.list],
  validate: {
    params: {
      code: Joi.string().required()
    }
  }
})

module.exports = cases
