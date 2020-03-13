const NodeCache = require('node-cache')
const redis = require('./redis')
const cache = new NodeCache({ stdTTL: 900, useClones: false })
const codeTranslate = require('./countryCodes.json')

async function baselab () {
  let data = cache.get('baselab')
  if (data) return data
  data = JSON.parse(await redis.getAsync('baselab-data'))
  if (!data) return null
  data.provider = 'TheBaseLab'
  data.total = {
    cases: data.total
  }

  data.total.name = 'Globally'
  for (const k in data.countries) {
    const o = data.countries[k]
    data.countries[k] = {}
    data.countries[k].cases = o
    data.countries[k].name = codeTranslate[k]
  }

  cache.set('baselab', data)
  return data
}

module.exports = {
  baselab
}
