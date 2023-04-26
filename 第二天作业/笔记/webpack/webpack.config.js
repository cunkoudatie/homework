// webpack配置文件
const path = require('path')//这个path 是用来拼接路径的
module.exports = {
    // 打包入口  相对路径
    entry:'./src/index.js',
    // 打包出口 对象
    output:{
        // path 表示打包后的路径
        path:path.resolve(__dirname,'output'),
        filename:'my-webpack.js'
    },
    module{
        rules:[
            {
                test:/\.css$/,
            }
        ]
    },
    plugins:[
        
    ]
}