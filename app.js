var dice = Math.round(Math.random()*1)
var tossBox= document.getElementById("box");
tossBox.style.display="none"

var score1 = 1
var score2 = 1



function select () {
    switch (dice){
        case 0 :
            document.getElementById("select").innerText="User 1 Have Chance To Choose Toss"
            break;

            

        case 1 :
            document.getElementById("select").innerText="User 2 Have Chance To Choose Toss"
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
        document.getElementById("finalResult").innerText="Sorry you loss the toss and another user got points"

    }

    if (dice === 0 && result1 === choiceResult) {
       var a = document.getElementById("user1").innerText=score1++
    
    }

    else{
        result1 !== choiceResult
        var b =document.getElementById("user2").innerText=score2++

    }

    var finallResult=  document.getElementById("finallResult")
    finallResult.style.display="none"

    if (a === 5){
         document.getElementById("finallResult").innerText= "User 1 Won"
         finallResult.style.display="block"

    }

    else if( b === 5) {
       document.getElementById("finallResult").innerText= "User 2 Won"
       finallResult.style.display="block"

    }

    

   
}


    
    
