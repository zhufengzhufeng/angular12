var str = 'username=!123&!password=!456';
//内置模块
//JSON.parse JSON.stringify
var querystring = require('querystring');
//字段间的分隔符 key value之间的分隔符
var obj = querystring.parse(str,'&!','=!');
console.log(querystring.stringify(obj,'&!','=!'));
//处理表单数据
