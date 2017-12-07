var ul = document.querySelector("ul")
var lis = document.querySelectorAll("li");
var spans = document.querySelectorAll("span")
var input = document.querySelector("input");

//add and remove strike-through

for(var i =0; i<lis.length; i++) {
    
lis[i].addEventListener("click", function(){
 
    this.classList.toggle("completed");

    
});
    

}   

//remove an entry when clicked on "X"
for(var i =0; i<spans.length; i++) {
spans[i].addEventListener("click", function(){
  this.parentNode.remove();

 });

}

//add an entry in the list by hitting enter


input.addEventListener("keypress",function(event){
    
    if (event.keyCode === 13) {
         
    var newLi=document.createElement("li")
    var inVal = this.value;
    //remove from the text box after hitting enter
    this.value=''
    //newLi.textContent=inVal
    //ul.appendChild(newLi)
   ul.innerHTML += '<li><span>X</span> ' + inVal + '</li>'; 
    
   //   var lis = document.querySelectorAll("li");
   // var spans = document.querySelectorAll("span")
 
   // add and remove strike-through
   // for(var i =0; i<lis.length; i++) {
 
   //  lis[i].addEventListener("click", function() {
   //      this.classList.toggle("completed");
  
   //  });
    
}
    

});


 ul.addEventListener("click", function(event) {
  var target = event.target;
  if (target.matches("span")) {
     target.parentNode.remove();
  } else if (target.matches("li")) {
    target.classList.toggle("completed");
  }
});

//remove an entry when clicked on "X"
//    for(var i =0; i<spans.length; i++) {
//     spans[i].addEventListener("click", function(){
//         this.parentNode.remove();
//     });
//    }
//      }
  
// });



// remove a list and toggle completed

   