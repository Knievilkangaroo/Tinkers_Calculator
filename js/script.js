let numOfStcks = 0;
let outPut = 0;
let input = '';
let choice = 0; // default choice out of 4
let times = 0;
let gold = 0;
let allum = 0;

// user tells robot how much to make
function formz() { // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 1000000
    let text;
    if (isNaN(x) || x < 1 || x > 1000000) {
        text = "Input not valid, please choose the amount of alloy you need";
    } else if (x = '01100111 01100101 01101110 01100100 01100101 01110010 00100000 01101001 01110011 00100000 01101110 01101111 01110100 00100000 00101110 00101110 00101110 00101110') 
        text = "go to src/silly"; { 
        } else {
            text = "Calculating.....";
        }
    
    document.getElementById("form").innerHTML = text;
}


// if user picks a alloy do this

if (choice = 0) { // no imput
    console.log("no user choice")
    return "Please select an alloy."
}

if (choice = 1) { // alluminum brass
    gold = 1;
    allum = 3;
    console.log("User Chose alluminum brass")
    times = allum * numOfStcks + gold * numOfStcks;
    return
}

if (choice = 2) { // alumnite
    console.log
    times = return
}

if (choice = 3) { // bronze
    console.log
    times = return
}

if (choice = 4) { // manyullyn
    console.log
    times = return
}

// Now do the math robot


// send it to the user :33
