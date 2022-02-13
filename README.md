# app
### 项目创建
本项目框架为使用vue-cli自动创建

### 运行方式
```
删除node_modules文件夹
npm install
npm run serve
```
### 主要内容
- vue.config.js:配置开发选项，防止未使用的变量报错
- jsconfig.json:配置路径，用@代替src
- pages文件夹:存放route页面
- router文件夹:配置route
- components文件夹:存放自定义的组件
- App.vue：整体框架
- main.js:整体框架的js文件，注册路由|全局组件|全局方法
- src/api文件夹：对一些api进行二次封装
- store文件夹：存放共享数据
- utils文件夹：目前存放token相关代码
### 安装新的库
- 例如：`npm install --save axios`，在package.json中查看是否安装成功

### store处理逻辑
- 组件通过dispath方法调用store中的action函数，action向mutation提交数据修改的申请（commit）,mutation修改state中的数据,组件在computed中通过getter获取需要的数据