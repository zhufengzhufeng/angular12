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
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/jsonp'){
        //获取前端传递的cb的名字 返回一个cb(数据)
        var callback = urlObj.query.callback;
        //cb(JSON.stringify({a:1}));
        var data = JSON.stringify({name:'你好'});
        res.setHeader('Content-Type','application/javascript;charset=utf8');
        //res.end(`${callback}(${data})`);//string or buffer
        res.end(callback+"("+data+")");
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
