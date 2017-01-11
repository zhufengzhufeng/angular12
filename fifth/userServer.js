var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var usersList = [
    {name:'张三',age:3,id:1},
    {name:'李四',age:4,id:2},
];
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./3.angular-resource.html').pipe(res);
    }else if(/^\/users(\/\d+)?$/.test(pathname)){  // /user/99
        //是否有传递id
        var id = /^\/users(\/\d+)?$/.exec(pathname)[1];  // /100
        switch (req.method){
            case 'GET':
                if(id){ //查询某一项
                    var uid = id.slice(1);
                    var result = usersList.find(function (item) {
                        return item.id == uid
                    });
                    if(result){
                        res.end(JSON.stringify(result));
                    }else{
                        res.end(JSON.stringify({}));
                    }
                }else{ //查询所有
                    res.end(JSON.stringify(usersList));
                }
                break;
            case 'POST':
                break;
            case 'PUT':
                break;
            case 'DELETE':
                break;
        }
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
}).listen(4000);


/*
res.setHeader('Content-Type','application/json;charset=utf8');
res.end(JSON.stringify({name:'你好'}))
想要返回json类型，需要设置头，防止乱码*/
