const router = require('koa-router')()
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel} = require('../model/resModel')
const loginCheckMiddle = require('../middleware/loginCheck')

router.prefix('/api/blog')

// 1.获取博客列表
router.get('/list', async function (ctx, next) {
    let author = ctx.query.author || ''
    const keyword = ctx.query.keyword || '' 
    
    if (ctx.query.isadmin) {
        // // 管理员界面
        if (ctx.session.username == null) {
            // 未登录
            ctx.body = new ErrorModel('未登录')
            return
        }
        // 强制查询自己的博客
        author = ctx.session.username
    }
    const listData = await getList(author, keyword)
    ctx.body = new SuccessModel(listData)
})

// 2.获取博客详情
router.get('/detail', async (ctx, next) => {
    const data = await getDetail(ctx.query.id)
    ctx.body = new SuccessModel(data)
})

// 3.新建博客
router.post('/new', loginCheckMiddle, async (ctx, next) => {
    const body = ctx.request.body
    body.author = ctx.session.username
    const data = await newBlog(body)
    ctx.body = new SuccessModel(data)
})

// 4.更新博客
router.post('/update', loginCheckMiddle, async (ctx, next) => {
    const val = await updateBlog(ctx.query.id, ctx.request.body)
    ctx.body = val ? (new SuccessModel()) : (new ErrorModel('更新博客失败'));
})

// 5.删除博客
router.post('/del', loginCheckMiddle, async (ctx, next) => {
    const author = ctx.session.username
    const val = delBlog(ctx.query.id, author)
    ctx.body = val ? (new SuccessModel()) : (new ErrorModel('删除博客失败'));
})

module.exports = router
