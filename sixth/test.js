//如果没有书 希望读出空数组
var fs = require('fs');
function readBooks(callback) {
    //在函数内部 预置 参数
    fs.readFile('./books.json','utf8',function (err,data) {
        if(data=='' || err){
            callback([]);
        }else{
            callback(JSON.parse(data));
        }
    });
}
function writeBooks(data,callback) {
    fs.writeFile('./books.json',JSON.stringify(data),callback);
}
var id = 1;