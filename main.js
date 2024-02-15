
const text = document.querySelector("input");

const button = document.querySelector("button");
button.onclick= getData;


let result=[];
let results=[];

function getData(){

    let data = text.value;

    result.push(data);

    results += [`<li>
    <input type="checkbox" onclick="check()"/>
    <span>${data}</span>
    </li>
    `];
    
   document.querySelector(".list ul").innerHTML=results;
   document.querySelector("input").value="";
};

function check(){
    
   let checkbox = document.querySelectorAll(".list input");
   let span = document.querySelectorAll(".list span");


   for(let i = 0; i<checkbox.length; i++){

    if (checkbox[i].checked==true) {
        span[i].classList.add("line-through")
       }
    
       else if(checkbox[i].checked==false) {
        span[i].classList.remove("line-through")
       }
   };


};



