const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author = '${author}' `
    }
    if (keyword) {
        sql += `and content like '%${keyword}%' `
    }
    sql += `order by createtime desc;`    

    // 返回 promise
    return exec(sql)
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1577162037083,
        author: '张三'
    }
}

const newBlog = (blogData = {}) => {
    console.log('newBlog blogData...', blogData);
    
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('update blog', id, blogData);
    
    return true;
}

const delBlog = (id) => {
    console.log('del blog', id);
    
    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}
