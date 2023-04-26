// 如何使用第三方包？
// 1，确认一下JS的运行环境  如果是引入node_modules下统一管理的第三方包
const _ = require('lodash')
let arr = [1,2,3]
_.fill(arr,'datie')
console.log(arr);