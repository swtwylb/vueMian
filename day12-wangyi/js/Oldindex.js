////console.log(555)
//
//  
// function Lol(name1,jineng1,jiage1){
// 	this.name = name1;
// 	this.jineng = jineng1;
// 	this.jiage = jiage1
// 	//this.kill();
// 	
// }
//Lol.prototype.eat = function(){
//	
//	console.log(this);
//	//console.log(this.jiage,"他的价格")
//}
////var gailun = new Lol("盖伦","转",3150);
////创建对象的时候调用方法
// var ruiwen = new Lol("放逐之刃","a",6300);
//ruiwen.eat();
//
//
//
//
//function Add(numOne1,numTwo1){
//
//	   this.numOne = numOne1;
//	    this.numTwo = numTwo1;
//      this.addTwo();
//	
//}
// Add.prototype.addTwo = function (){
// 	console.log(this.numOne+this.numTwo);
// 	
// }
// 
// var lh =new Add(20,80);
// 
//// 
//// 
//// 
//// 
//// 
//// 
//// ar swt = new Add(20,80);


// function Apple(color,speed,size,price){
// 	this.color = color;
// 	this.speed = speed;
// 	this.size = size;
// 	this.price = price;
// }
//
// Apple.prototype.eatP = function(){
// 	
// 	console.log("我吃了一个这个颜色的水果",this.color);
// 	
// 	
// }
//var appOne = new Apple("红色","哭的","打的",20);
////appOne.eatP();
//function Banner(color,speed,size,price){
// 	this.color = color;
// 	this.speed = speed;
// 	this.size = size;
// 	this.price = price;
// }
// 
//// Banner.prototype= new Apple();
// 
// var banOne = new Apple("黄色","suande","晓得");
// banOne.eatP();
function Tree (type,hight,color){
	this.type= type;
	this.hight= hight;
	this.color= color;
	
}
   Tree.prototype.kaiHua = function(){
   	 console.log("我开花了",this.type) 
   	 return this;
   }
   
   Tree.prototype.zhangGao = function(){
   	 console.log("我长高了",this.hight) 
   	
   }
 var yangShu = new Tree("杨树",100,"棕褐色");
 
//yangShu.kaiHua().zhangGao();
console.log(yangShu.zhangGao())
链式调用