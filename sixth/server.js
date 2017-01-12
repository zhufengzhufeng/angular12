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