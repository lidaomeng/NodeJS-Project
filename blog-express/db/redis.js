const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const rc = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
// rc.auth(REDIS_CONF.auth)
rc.on('error', err => {
    console.error(err);
})

module.exports = rc
