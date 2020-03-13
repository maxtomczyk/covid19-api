const CronJob = require('cron').CronJob
const baseLabSync = require('./data-providers/baselab')

const baseLabJob = new CronJob('0 */10 * * * *', baseLabSync, null, true, 'Europe/Warsaw')

function start () {
  baseLabJob.start()
}

function syncAll () {
  baseLabSync()
}

module.exports = {
  start,
  syncAll
}
