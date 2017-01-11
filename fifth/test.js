var str = '/user/1';
var str1 = '/user';
//匹配成功 都是true  如果有id拿id

console.log(/^\/user(\/\d+)?$/.exec(str1)[1].slice(1));