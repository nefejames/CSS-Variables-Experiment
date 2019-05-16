var title = document.querySelector("h2");
var rootStyle = document.documentElement.style;
var fontSizeInput = document.querySelector(".font-size");
var bgColorInput = document.querySelector(".bg-color");
var textColorInput = document.querySelector(".text-color");
var boxShadowColorInput = document.querySelector(".box-shadow-color");
var shadowXValue  = document.querySelector(".box-shadow-x-value");
var shadowYValue = document.querySelector(".box-shadow-y-value");
var shadowBlur = document.querySelector(".box-shadow-blur");

//font size script
fontSizeInput.addEventListener("input", function(){
     console.log(fontSizeInput.value)
     rootStyle.setProperty('--font-size', `${this.value}px` ); 
})

//bg color script
bgColorInput.addEventListener("input", function(){ 
     //when i used arrow func, it wasnt working. why? 
     console.log(bgColorInput.value)
     rootStyle.setProperty("--main-color", this.value);
})

//text color script
textColorInput.addEventListener("input", function(){
     rootStyle.setProperty("--text-color", this.value);
})

//box shadow color script
boxShadowColorInput.addEventListener("input", function(){
     rootStyle.setProperty("--shadow-color", this.value);
})

//shadow x-value script
shadowXValue.addEventListener("input", function(){
     rootStyle.setProperty("--x-shadow", ` ${this.value}em ` );
})

//shadow y-value script
shadowYValue.addEventListener("input", function(){
     rootStyle.setProperty("--y-shadow", ` ${this.value}em ` );
})

//box shadow blur script
shadowBlur.addEventListener("input", function(){
     rootStyle.setProperty("--shadow-blur", ` ${this.value}em` )
})