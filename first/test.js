var arrs  = [
    {name:'orange',type:['酸','甜']},
    {name:'apple',type:['红','绿','黄']}
];

for(var i = 0; i<arrs.length;i++){
    for(var j = 0; j<arrs[i].type.length;j++){
        console.log(arrs[i].type[j]);
    }
}