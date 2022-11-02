
import myJSON from './products.json' assert {type: 'json'};

let search = document.getElementById("search");
let button = document.getElementById("sub");
let result = document.getElementById("result");
button.addEventListener("click", function(){
    let searchItem = search.value;
    
    for(let i in myJSON){
        if(myJSON[i].name.includes(searchItem)){
            document.querySelector("#result").innerHTML ="<p>" + myJSON[i].name + " Price: " + myJSON[i].price + " Qty: " + myJSON[i].qty + "</p>";
        }
        
    }
})
