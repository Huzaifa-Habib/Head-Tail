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


function toss(){

    var choice = document.getElementsByName('option');
              
    for(i = 0; i < choice.length; i++) {
        if(choice[i].checked)
        var choiceResult=choice[i].value
        document.getElementById("choice").innerHTML  = "You Choose: "+ choiceResult;
    }



    var coin =["Heads","Tail"];
    var result1 = coin[Math.floor( Math.random() * coin.length)];
    document.getElementById("result").innerText="It's " + result1;

    if (result1 === choiceResult) {

        document.getElementById("finalResult").innerText="Congratulation you won the toss"

    }

    else {
        result1 !== choiceResult
        document.getElementById("finalResult").innerText="Sorry you loss the toss"

    }

   
}


    
    
