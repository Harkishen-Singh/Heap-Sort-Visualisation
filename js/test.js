var x = {name_first:'harkishen',age:19,name_last:'singh'};
var y = {name_first:'puneet',age:20,name_last:'singh'};
var z = {name_first:'fsdg',age:25,name_last:'singh'};
var b = {name_first:'fdgfdf',age:12,name_last:'singh'};
var a = {name_first:'hfgh',age:10,name_last:'singh'};

var oo = [x,y,z,b,a];
console.log(oo);

function thh(){
for(var j=0;j<oo.length;j++)
for(var i=0; i<oo.length-1;i++){
	if(oo[i]['age']<oo[i+1]['age']){
		let temp= oo[i]['name_first'],age=oo[i]['age'];
		oo[i]['name_first'] = oo[i+1]['name_first'];oo[i]['age'] = oo[i+1]['age'];
		oo[i+1]['name_first']=temp;oo[i+1]['age']=age;

	}//console.log(oo[i]['name_first']);
} console.log(oo);
}
setTimeout(thh,2000);

