var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./form.html').pipe(res);
    }else if(/^\/user(\/\d+)?$/.test(pathname)){  // /user/99
        //是否有传递id
        var id = /^\/user(\/\d+)?$/.exec(pathname)[1];
        switch (req.method){
            case 'GET':
                if(id){}else{}
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
}).listen(3333);


/*
res.setHeader('Content-Type','application/json;charset=utf8');
res.end(JSON.stringify({name:'你好'}))
想要返回json类型，需要设置头，防止乱码*/
