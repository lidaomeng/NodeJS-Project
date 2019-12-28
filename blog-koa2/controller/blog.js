const { exec } = require('../db/mysql')
const xss = require('xss')

// 1.获取博客列表
const getList = async (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author = '${author}' `
    }
    if (keyword) {
        sql += `and content like '%${keyword}%' `
    }
    sql += `order by createtime desc;`    

    // 返回 promise
    return await exec(sql)
}

// 2.获取博客详情
const getDetail = async (id) => {
    const sql = `select * from blogs where id = '${id}'`
    const rows = await exec(sql)
    return rows[0]
}

// 3.新建博客
const newBlog = async (blogData = {}) => {
    const title = xss(blogData.title) // 防止XSS攻击
    const content = xss(blogData.content)
    const author = blogData.author
    const createTime = Date.now()

    const sql = `
        insert into blogs (title, content, createtime, author)
        values ('${title}', '${content}', ${createTime}, '${author}')
    `

    const insertData = await exec(sql)
    return {
        id: insertData.insertId
    }
}

// 4.更新博客
const updateBlog = async (id, blogData = {}) => {
    const title = xss(blogData.title)
    const content = xss(blogData.content)
    const sql = `
        update blogs set title = '${title}', content = '${content}' where id = ${id}
    `

    const updateData = await exec(sql)
    return updateData.affectedRows > 0
}

// 5.删除博客
const delBlog = async (id, author) => {
    const sql = `delete from blogs where id = ${id} and author = '${author}'`

    const delData = await exec(sql)
    return delData.affectedRows > 0
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}
