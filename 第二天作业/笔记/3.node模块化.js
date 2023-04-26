// 这个文件是我们项目的JS 入口文件 ,在node环境中，模块化的环境是不一样的
// 导入外部模块的内容
const {a,x}= require('./3-1.a.js')
const{c,d} = require('./3-1.b.js')

console.log(a,x,c,d);