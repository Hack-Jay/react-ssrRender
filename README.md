##### src目录下的server是服务端的代码，client是客户端的代码，containers是组件
项目中package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev:start": "nodemon --watch build --exec node \"./build/bundle.js\" ",
    "dev:build:server": "webpack --config webpack.server.js --watch",
    "dev:build:client": "webpack --config webpack.client.js --watch",
    "dev": "npm-run-all --parallel dev:**"
  },
```
src中server和client目录下的入口文件index都会经过webpack打包，其中

```
server/index.js => build/bundle.js
client/index.js => public/index.js

```
最后运行npm run dev 的时候所有文件打包完成并执行build/bundle.js，开启3000端口服务，返回的html中会加载/index.js,这是express中的静态资源(打包好的客户端代码)

```
app.use(express.static('public'))

```

```
<html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root"><div data-reactroot=""><span>This is home component</span><br/><button> button</button></div></div>
        <script src="/index.js"></script>
      </body>
</html>
```
#### webpack --config webpack.config.js --watch
当前打包文件变化时就会重新打包