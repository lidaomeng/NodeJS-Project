let fs = require('fs')
let path = require('path')

let file1 = path.resolve(__dirname, 'data.txt')
let file2 = path.resolve(__dirname, 'data-bak.txt')

let readStream = fs.createReadStream(file1)
let writeStream = fs.createWriteStream(file2)

readStream.pipe(writeStream)

readStream.on('end', () => {
    console.log('拷贝完成');
})
