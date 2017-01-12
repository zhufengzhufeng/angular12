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
// var id = 1;
var id = 1;// =>
var obj  =  {name:'哈哈'};
readBooks(function (data) {
    data = data.map(function (item) {
        if(item.id == id){
            return obj
        }
        return item;
    });
    writeBooks(data,function () {
        console.log('修改成功');
    });
});

/*readBooks(function (data) {
    data=data.filter(function (item) { //过滤掉不想要的数据
        return item.id!=id;
    });
    writeBooks(data,function () { //在将数据写入到book.json中
    });
});*/
