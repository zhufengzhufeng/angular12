var http = require('http');//创建服务
var fs = require('fs');//fileSystem操作文件
var url = require('url');//解析url
var mime = require('mime');//content-type

http.createServer(function (req,res) {
    //后台路由
    console.log(req.url); //不包括主机，路径+查询参数
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./form.html').pipe(res);
    }else if(pathname === '/form'){
        //数据普通方式 json格式 urlencoded 表单格式
        var str = '';
        req.on('data',function (data) {
            str+=data;
        });
        req.on('end',function () {
            // console.log(str);// username=123&password=345;
            var obj= require('querystring').parse(str)
            //跳转到百度
            res.statusCode = 302;
            if(obj.username == '123' &&obj.password == '123'){
                //调到百度
                res.setHeader('Location','http://www.baidu.com');
            }else{
                //跳腾讯
                res.setHeader('Location','http://www.qq.com');
            }
            res.end('');
        });
    }else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('Not Found ');
            }
        });
    }
}).listen(3333);


/*
res.setHeader('Content-Type','application/json;charset=utf8');
res.end(JSON.stringify({name:'你好'}))
想要返回json类型，需要设置头，防止乱码*/
