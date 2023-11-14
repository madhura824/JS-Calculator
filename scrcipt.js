let input=document.querySelector("input");
let buttons=document.querySelectorAll("button");
let string=""; //string to display in input
let arr=Array.from(buttons);  //make array of all the buttons

arr.forEach(function(btnn,idx){
    btnn.addEventListener("click",function(details){
        console.log(details);
        if(details.target.innerHTML=="="){
            string=eval(string);
            input.value=string;
        }
        else if(details.target.innerHTML=="AC"){
            string="";
            input.value=0;

        }else if(details.target.innerHTML=="DEL"){
                string=string.substring(0,string.length-1);
                input.value=string;
        }
        else{
            string+=details.target.innerHTML;
            console.log(details.target.innerHTML);
            input.value=string;
        }
    })
})