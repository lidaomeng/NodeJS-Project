const env = process.env.NODE_ENV

// 配置
let MYSQL_CONF
let REDIS_CONF

if (env === 'dev') {
    // mysql
    MYSQL_CONF = {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'myblog'
    }

    // redis
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379,
        auth: '123456'
    }
}

if (env === 'production') {
    // mysql
    MYSQL_CONF = {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'myblog'
    }

    // redis
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379,
        auth: '123456'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}
