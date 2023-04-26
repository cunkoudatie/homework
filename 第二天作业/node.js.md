# node.js

### node.js 概念(了解)

```
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时（运行环境）
	node中的JS = ECMAScript + 模块系统
```



### 初始化项目（掌握）

环境安装 	node-v ——————> 出现’’版本号‘’，即node环境安装成功

​	创建project文件夹，

​	输入命令 `npm init -y`，项目目录下看到一个自动生成的文件 `package.json`



部署服务器~淘宝镜像

> 输入命令 `npm config set registry https://registry.npm.taobao.org` 设置淘宝镜像

> 输入命令`npm config get registry` 确保设置成功

命令来下载一个函数库lodash

> 输入命令 `npm install lodash--save`

project下生成  node_modules文件夹 |（存放所有 通过NPM下载的所有第三包）

> install 表示安装的意思 可以简写为i
>
> install 后面跟上你需要安装的包的具体名称 你可以在npm.js官网上找到准确名称
>
> --save 表示你将这个包安装到了生产环境下，可以简写为-S

------



### NPM的常见命令（掌握）

我们把NPM常见的命令都做一个汇总：

安装指定第三方包 如果希望全局安装 可以加上-g

> npm i 包名 -g

卸载指定第三方包

> npm uninstall 包名

更新指定第三方包

> npm update 包名

安装package.json中的所有依赖

> npm i

------



### yarn的常见命令（掌握）

除开npm命令，现在还提供了yarn命令来实现包管理，首先需要全局安装yarn

> npm i yarn -g

我们用yarn命令来实现刚才的操作

> yarn global add 包名   ------->用于全局安装一个Yarn包
>
> yarn remove 包名  ---------->当前项目卸载yarm
>
> yarn upgrade 包名 ---------->更新到最新版本
>
> yarn install  ------------>安装当前项目中所需的所有依赖项 ，读取package.josn的内容

### webpack的作用(了解)

```
作用：	
		webpack 就是一个打包工具。将多个复杂的JavaScript代码，压缩、优化、转码最后打包到浏览器可以读取的代码。<JavaScript文件、CSS文件、图片等资源>
```

安装webpack，新建一个webpack的文件夹

> npm i webpack webpack-cli

在webpack项目下新建一个src目录用来书写业务代码，新建一个index.html文件来放置项目结构

![image-20230425214801687](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230425214801687.png)

在src目录下新建一个js目录

  ------>下面再新建一个utils.js文件【以箭头函数的形式书写一个简单的求和函数】

------

`const sum = (a,b)=>{`

`return a + b`

`}`

`module.exports = {sum}`

------

新建一个api.js文件来书写接口请求模块，通过common.js的规范导出

src目录下新建一个index.js作为我们的所有js的主入口，在这个文件中引入刚才书写的求和函数和接口函数

![image-20230425215623792](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230425215623792.png)

最后运行 index.html

![p9korUH.png](https://s1.ax1x.com/2023/04/20/p9korUH.png)

输入 webpack

获得 dist的文件夹-> main.js 重新引入并执行。