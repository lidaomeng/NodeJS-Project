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

module.exports = {
    getList
}
