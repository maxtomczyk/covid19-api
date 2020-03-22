const cache = require('../../modules/cache')

async function list (ctx) {
  try {
    let code = ctx.params.code.toUpperCase()
    const data = await cache.baselab()

    if (!data) {
      ctx.status = 503
      return
    }

    if (!code || code === 'GLOBAL') {
      ctx.body = {
        data: data.countries,
        provider: data.provider
      }
    } else if (code === 'TOTAL') {
      ctx.body = {
        data: data.total,
        provider: data.provider
      }
    } else {
      if(code.length === 2) code = 'X' + code
      const c = data.countries[code]
      if (!c) {
        ctx.status = 404
        return
      }
      ctx.body = {
        data: c,
        provider: data.provider
      }
    }
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  list
}
