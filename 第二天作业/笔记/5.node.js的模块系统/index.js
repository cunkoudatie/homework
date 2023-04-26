// 使用 node.js的内置模 块
const fs = require('fs')//引入内置模块
fs.readFile('./1.txt',function(err,data){
   const fb=data.toString()
        fs.writeFile('./3.txt',fb,function (err) {
    console.log(err);
})
})


/* 1
txt ----> function(err,data) 
data ---->表示读取文件的内容，默认是buffer格式保存 ，使用toString将内容转换成字符串
*/

// 希望2.txt里哦面写入 一句话 node.js 真好用
/* fs.writeFile('./2.txt','node.js真好用',function (err,data) {
    console.log(err,data);
})
*/
