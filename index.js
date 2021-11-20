document.querySelector("button").addEventListener("click",fun);
function fun(){
    var n1;
    n1=Math.random();
    n1=Math.floor(n1*6+1);
    var n2;
    n2=Math.random();
    n2=Math.floor(n2*6+1);
    var diceImage1="images/dice"+n1+".png";
    var diceImage2="images/dice"+n2+".png";
    document.querySelectorAll("img")[0].setAttribute("src",diceImage1);
    document.querySelectorAll("img")[1].setAttribute("src",diceImage2);
    if(n1>n2){
        document.querySelector("h1").innerHTML="Player 1 Wins🎉";
    }
    else if(n2>n1){
        document.querySelector("h1").innerHTML="Player 2 Wins🎉";
    }
    else {
        document.querySelector("h1").innerHTML="Ooops! Draw.... Retry Again";
    }
}
