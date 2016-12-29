//增加(push)
//删除(filter)
var num = 3;
var arr = [{name:1},{name:3},{name:2},{name:3}];
//filter 过滤 如果在filter函数中返回true表示保留，返回false删除，同forEach
var newArr = arr.filter(function (item,index) {
    return item.name != num;
});
//会返回一个新的数组
console.log(newArr);
//修改 map
var num = 3;
var obj = {name:100};
var arr = [{name:1},{name:3},{name:2},{name:3}];
var newArr = arr.map(function (item,index) {//映射成一个新的数组
    if(item.name == num){ //如果当前向找到了，将最新的对象返回替换掉原有的
        return obj;
    }
    return item;
});
console.log(newArr);

//查询(find)  findOne 查到一项后返回当前项 不继续查找
var num = 3;
var arr = [{name:1},{name:3,age:100},{name:2},{name:3}];
//返回找到的那一项
var obj = arr.find(function (item,index) {
    //找到后返回true即可
    if(item.name ==num){
        return true;//返回true则会将当前item返回
    }
});
console.log(obj);

