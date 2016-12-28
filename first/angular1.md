## angular
- 考试内容，书店项目
## 什么是angular
- 学习曲线 - 难（入门容易）
- 框架   我们写好了（按照人家的规则写好） （被动） 人家有房子，我们放入家具
- jquery库  我们调用人家的方法 （主动） 自己搭建房子
- MVVM/MVC
    - MVC
        - model(数据) view(视图) controller（控制器）
        - view(视图) 人为操作-> controller（控制器）->model->view
    - MVVM
        - model view viewModel
        
> 强约束

## 使用angular
### 安装angular 
npm node package manager  

- 先初始化package.json文件
```
npm init -y
```
- 安装angularjs
```
npm install angular
```

> 在当前的文件夹下生成node_modules文件将安好的内容放入（名字(package.json)不能叫angular1）

## 应用angular
- ng-app
让angular自行启动，并且创建一个$rootScope跟作用域(window)
- ng-model(表单元素上 input)
实现双向数据绑定，如果有数据会将数据绑定到输入框中，没数据会在当前作用域下声明，如果改变了输入框框中的内容，会影响数据的变化，如果数据变化了，会将新的内容绑定到输入框中

> 用点的形式取得就是.前面对象的属性，如果这个对象不存在，则会声明

- ng-init
初始化数据
- 取值表达式{{}}
取当前作用域上的值,支持运算，赋值，三元表达式

## 防止闪烁
- ng-bind用法同{{}} 防止单个元素闪烁
- ng-cloak 需要自定义样式 将带有ng-cloak属性元素隐藏掉
```
[ng-cloak]{display:none} 
```

## 控制器和模块
- 生成模块
```
angular.module('moduleName',[]);
```
- 创建控制器
```
angular.module('moduleName').controller('ctrlName',function($scope){}) scope就是我们的viewModel
```
- 应用控制器
```
<div ng-controller="ctrlName">{{作用域上的变量}}</div>
```
## 控制器的特点
- 1.主要控制数据
- 2.不要在控制器中操作DOM(link函数中?)
- 3.控制器的作用范围(与dom标签结构平齐)
- 4.控制器可以嵌套(嵌套的是带有控制器的dom节点 不是控制器)
- 5.有继承关系，父作用域不能继承子作用域，子作用域可以继承父作用域

## 配置全局属性
```
app.run(function($rootScope){});
```

> 防止压缩：代码在压缩的过程会将变量压缩成较短改变了形参的名字，angular无法获取，必须采用数组的形式，数组的第一项对应函数的第一个形参，以此类推

## ng-repeat  
提供常用属性 $index $odd $even....
```
<ul>
    <li ng-repeat="(键,值) in 对象">{{$index}}</li>
</ul>
```
- 数组
如果内容重复要加track by $index  
- 对象
对象的键(属性名)和$index(索引)不是一个东西

## 第一天作业
模拟数据实现购物车基本界面

## 配置内网
第一次下载需要先指向zhufeng网址下载,提升网速
```
npm config set registry "http://172.18.0.199"
```
## 切换代理的工具
```
npm install nrm -g
```
## 添加源
```
nrm add 名字 地址/nrm del 名字
```

> sudo增加权限

## 查看源

## 创建静态博客hexo
需要的环境nodejs,git

- 安装hexo
```
npm install -g hexo-cli
```
- 生成博客
```
hexo init 文件夹的名字
```
- 启动服务
```
cd 文件夹的名字
hexo server
```
> 全局安装的意思是：只在命令行下使用