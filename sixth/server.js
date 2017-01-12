var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
//负责读取books.json中的文件
function readBooks(callback) {
    fs.readFile('./books.json','utf8',function (err,data) {
        if(err || data==''){
            callback([])
        }else{
            callback(JSON.parse(data));
        }
    });
}
//负责向books.json中写入内容
function writeBooks(data,callback) {
    fs.writeFile('./books.json',JSON.stringify(data),callback);
}

http.createServer(function (req,res) {
    //后台只将首页返回即可
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(/^\/books(\/\d+)?$/.test(pathname)){
        //判断是否有id
        var id = pathname.match(/^\/books(\/\d+)?$/)[1];
        switch (req.method){
            case 'GET':
                if(id){

                }else{
                    readBooks(function (data) {
                        res.end(JSON.stringify(data));
                    });
                }
                break;
            case 'POST':
                var str = '';
                req.on('data',function (data) {
                    str+=data;
                });
                req.on('end',function () {
                    var book = JSON.parse(str);
                    //读取增加id
                    readBooks(function (data) {
                        book.id = data.length?parseInt(data[data.length-1].id)+1:1;
                        data.push(book);
                        writeBooks(data,function () {
                            res.end(JSON.stringify(book));
                        });
                    });
                });
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
                res.end();
            }
        });
    }
}).listen(80);