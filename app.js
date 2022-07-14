var dice = Math.round(Math.random()*1)
var tossBox= document.getElementById("box");
tossBox.style.display="none"

function select () {
    switch (dice){
        case 0 :
            document.getElementById("select1").innerText="User1 Have Chance To Choose Toss"
            break;

        case 1 :
            document.getElementById("select1").innerText="User2 Have Chance To Choose Toss"

            break;    
    }

    tossBox.style.display="block";
}

var head=document.getElementById("head")
var tail=document.getElementById("tail")

function toss(){
    
}