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

## 使用angular
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

