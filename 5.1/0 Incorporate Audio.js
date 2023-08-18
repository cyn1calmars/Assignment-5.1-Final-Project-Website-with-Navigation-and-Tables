//Function check if the word entered in the input is or is not a palindrome
function checkPalindrome(){

    //grabs the word from the input and turns it into a value
    let string = document.getElementById("palindrome").value;

    //grabs the string value, lowercases and removes spaces and invalid characters
    let cleanstring = string.toLowerCase().replace(/[^a-z0-9]/g,'');

    //grabs the cleanstring and splits in half, reverses the letters and puts them back together
    let inputString = cleanstring.split('').reverse().join('');

//If the final string = the base word, then alert that it is, if not, then alert it isn't
if(inputString == cleanstring){
    alert(string + " is a Palindrome!");
    document.getElementById("cheers").src = "https://media.tenor.com/H757d2lNrBkAAAAi/piffle-cute.gif"
    document.getElementById("no").src = ""
}else{
    alert(string + " is not a Palindrome!");
    document.getElementById("cheers").src = ""
    document.getElementById("no").src = "https://media.tenor.com/iPf6IpTl66kAAAAj/cutie-cat.gif"
}

//If the cleanstring equals the palindrome "racecar", then show a racecar picture, if it doesn't, then don't
if(cleanstring == "racecar"){
    document.getElementById("tacocat").src = ""
    document.getElementById("cheers").src = ""
    document.getElementById("racecar").src = "https://www.slashfilm.com/img/gallery/where-pixar-cars-come-from/intro-1630006086.jpg"
}else{
    document.getElementById("tacocat").src = ""
    document.getElementById("racecar").src = ""
    
}

//If the cleanstring equals the palidrome tacocat, then show a tacocat picture, if it doesn't then don't
if(cleanstring == "tacocat"){
    document.getElementById("racecar").src = ""
    document.getElementById("cheers").src = ""
    document.getElementById("tacocat").src = "https://m.media-amazon.com/images/I/61koWFgQuOL._AC_UF1000,1000_QL80_.jpg"
}
}
