
  	
  	var box = document.querySelector(".div-one");
  	 box.onclick = function (){
  	 	
  	 	console.log(this)
  	 }
  	 
  	 var spanOne = document.querySelector(".span-one");
  	 spanOne.onclick = function (){
  	 	
  	 	console.log(this)
  	 }
  	
  	function myFunction (name,age){
  		console.log(this,this.name=name)
  		
  	
  	}
  	//myFunction.apply(this,["盒子",18]);
  	//myFunction.call(box,"盒子",18);
  	//window.myFunction("小狗",55);
  	
  	function Doctor (name,age){
  	   this.name = name ;
  	   this.age = age;
  	   this.look();
  	}
   Doctor.prototype.look = function (){
   	  console.log(this,"this对象")
   	  console.log(this.name);
   }
    //var hushu = new Doctor("风潮东",2);
    //Doctor.apply(Doctor,["分拆东",18])‘
     
    
     
     var colorOne = "red";
     var that = this;
     var boxDom = document.querySelector(".div-one");
     boxDom.onclick = function (){
   	   that.colorOne = "black";
   	   console.log(that)
   	   console.log(colorOne)
   	  
   }
