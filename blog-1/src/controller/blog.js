const getList = (author, keyword) => {
    // 先返回数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1577162037083,
            author: '张三'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1577162053459,
            author: '张三'
        }
    ]
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
