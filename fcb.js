


var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var h3 = document.querySelector("h3")


// console.log(color1)
// console.log(color2)
// console.log(body)
// console.log(h3)


function setGradient(){

    body.style.background = "linear-gradient(to right, "+  color1.value +", "+  color2.value + ")";
    // console.log(color2.value)

      h3.textContent = body.style.background +";"
    //  h3.innerHTML = body.style.background +";"
    // h3.innerText = body.style.background +";"

}


color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)
  



//var btn = document.getElementsByTagName("button")[0];
var btn = document.getElementById("enter");
var input = document.getElementById("input")
var ul = document.querySelector("ul")


//on click event
btn.addEventListener("click", function(){
    //check if input is empty
    if(input.value.length > 0){

    // creat an element
    var li = document.createElement("li")

    // append textNode
    li.appendChild(document.createTextNode(input.value))

    //append to the ul
    ul.appendChild(li)

    //clear place holder
    input.value = "";
    }

})

//keypress

input.addEventListener("keypress", function(event){
    //  console.log(event.value)
    if(input.value > 0 && event.keyCode ==="13"){
        var li = document.createElement("li")
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            input.value = "";
    }
})