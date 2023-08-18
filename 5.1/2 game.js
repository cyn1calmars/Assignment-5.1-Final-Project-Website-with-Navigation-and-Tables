//a&b and x&y are random number variables that generate numbers from 1-10 representing the cards
//a,b,c,d, and e represent DEALER
//w, x, y, z, and zz represent YOU
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    let x = Math.floor(Math.random() * 10) + 1;
    let y = Math.floor(Math.random() * 10) + 1;

//c&z is the two random numbers added for the total
    let c = a + b;
    let z = x + y;

//Function is called here when the start button is clicked
function displaynum1(){
    
    //first random number will be first card for dealer
    document.getElementById("first player").innerHTML = a;
    //second random number will be second card for dealer
    document.getElementById("first roll").innerHTML = b;
    //total of both cards
    document.getElementById("total1").innerHTML = c;

    //REPEAT FOR USER OR YOU
    document.getElementById("second player").innerHTML = x;
    document.getElementById("second roll").innerHTML = y;
    document.getElementById("total2").innerHTML = z;

    //if the Dealers cards totals 17, the dealer will fold
    if(c==17 && z>17){
        alert("Dealer got 17 and Stands. YOU WIN");
     }else if(c==17 && z<17){
        alert("Dealer got 17 and won.")
     }

}    

//e&w represent the third card drawn 
    let e = Math.floor(Math.random() * 10) + 1;
    let w = Math.floor(Math.random() * 10) + 1;

//d&zz represent the total of all 3 cards
    let d = e + c;
    let zz = w + z;

//Function called for when the HIT button is clicked
function displaynum2(){

    //adds third random number for the thrid card
    document.getElementById("third roll1").innerHTML = e;
    document.getElementById("third roll2").innerHTML = w;
    //adds the third card to the toal
    document.getElementById("total1").innerHTML = d;
    document.getElementById("total2").innerHTML = zz;

    //if the you have more than 21 and the dealer is less 21, than you lose or "Bust"
        if(zz>21 && d<21 && c!=17 && d!=17){
            alert("BUST");
        }
    //If the dealer has more than 21 and you dont, than the Dealer Bust and you win
        else if(d>21 && zz<21){
            alert("Dealer Busted. YOU WIN");
         }
    //If you "hit" and your lower, than dealer won
         if(d>zz && zz<21 && d!=zz && d!=21 && d<21){
            alert("Dealer Won");
         }
    //If you "hit" and you have higher than dealer, than you win
         else if(zz>d && zz!=21 && d<21 && d!=21){
            alert("You win")
         }
    //If you equal 21 after third card is drawn, than an alert will show
         if(zz==21 && d!=21 && e!= w!=0){
            alert("BLACKJACK");
         }
    //If the Dealer got 21, than an alert will show
         else if(d==21 || c==21){
            alert("Dealer has BLACKJACK");
         }
    //If both the Dealer and You have 21 and alert will show 
         if(zz==21 && d==21){
            alert("Dealer has BLACKJACK");
         }
    //If the Dealer has 17, it will fold and an alert will show
         if(d==17 && zz!=21 && zz>17){
            alert("Dealer got 17 and Stands. YOU WIN");
         }
    //If the dealer got 17 after hit and you have lower, than you lost
         else if(d==17 && zz!=21 && zz<17){
            alert("Dealer got 17 and won");
         }
}

//Function called when the button "Stand" is clicked
function Stand(){
    //If the dealer has more, but you have less, than dealer busted 
    if(d>21 && zz<21){
        alert("Dealer Busted");
     }
    //If you equal 21, BlackJack
    if(zz==21 && d!=21 && e!=0 && w!=0){
        alert("BLACKJACK");
     }
    //If dealer equals 21 than Dealer has BlackJack
     if((zz==21 && d==21) || (d==21 && zz!=21)){
        alert("Dealer has BLACKJACK");
     }
    //If you have over 21 and the dealer doesnt, than bust 
    if(d<21 && zz>21 && e!=0 && w!=0){
        alert("BUST");
    }
    //If dealer has over you and you stand, than dealer wins
    if((d>zz && d!=21 && zz!=d && z!=c && d<21) || (c>z && zz<d)){
        alert("Dealer Won");
    }

    //If you have more the dealer when you stand than you win
    if((zz>d && zz<21) || (z>c && d!=zz & zz!=21 && c!=z && zz<21) || (d<zz && zz!=21 && zz<21)){
        alert("You win");
     }
    //If you both equal before 21 and you stand, then you draw
     if((c==z && c!=21 || d==zz) || (d==zz && zz!=21 && d!=21 && e==0 && w==0)){
        alert("DRAW");
     }
    //If dealer and you have over 21 at the same time after hit, than you both draw over a "bust"
     else if (zz>21 && d>21 && e==0 && w==0){
        alert("You both have over 21. You both Bust");
     }
     
}

