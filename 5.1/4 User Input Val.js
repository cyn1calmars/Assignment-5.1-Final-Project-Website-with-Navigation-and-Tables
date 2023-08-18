//Function called when clicking submit
function strcheck(){
    let fname = document.getElementById("fname_input").value; //First name
    let lname = document.getElementById("lname_input").value; //Last name
    let Name = fname + lname;  // First and Last Name

//Says Hello "first and last name"
document.getElementById("f&lname").innerHTML = "Hello" + " " + fname + " " + lname;    
    let zip = document.getElementById("zip_input").value; //Zip code

//Shows the zipcode
document.getElementById("zipcode").innerHTML = zip;

//Name is converted into a length of characters
//if the Name isn't entered into the input, then alert
    if(Name.length == 0){
        alert("Please enter in First and Last Name");
    }

//If the name is under 20 characters, or exactly, or over, then alert
    if(Name.length < 20 && Name.length != 0){
        alert("Name is under 20 characters long.");
    }else if(Name.length == 20){
        alert("Name is exactly 20 characters long.");
    }
    else if(Name.length != 0){
        alert("Name is over 20 characters long.");
    }
    
//zip code is converted into a length of characters
//If the zip code is under or above 5, then alert user to re-enter, if its exactly 5, then its good
    if(zip.length < 5 ){
        alert("Zip Code is under 5 characters and is invalid. Please re-enter");
    }else if(zip.length > 5){
        alert("Zip Code is over 5 characters and is invalid. Please re-enter");
    }
    else{
        alert("Zip Code is good");
    }
}