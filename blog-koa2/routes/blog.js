const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

module.exports = router
