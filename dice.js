var num1;
num1=Math.random()*6;
num1=Math.floor(num1)+1;

var num2;
num2=Math.random()*6;
num2=Math.floor(num2)+1;
if(num1>num2)
{
    document.querySelector("h1").textContent="⛳Player 1 wins!";
}
else if(num1<num2){
    document.querySelector("h1").textContent="⛳Player 2 wins!";
}
else{
    document.querySelector("h1").textContent="It's a Tie!";
}

document.querySelector(".img1").setAttribute("src","images/dice"+String(num1)+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+String(num2)+".png");
