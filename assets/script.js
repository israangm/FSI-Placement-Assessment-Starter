// First, tell us your name
let yourName = "Israan Mendes" 
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Variables tracking the counts of each cookie type
// Gingerbread
let gbVotesTd = document.querySelector("#qty-gb");  
let gbVotes = localStorage.getItem('gbVotes');
if (gbVotes === null) {
    gbVotes = 0;
} else{
    gbVotes = parseInt(gbVotes)
}
gbVotesTd.textContent = gbVotes;

// Chocolate Chip
let ccVotesTd = document.querySelector("#qty-cc");  
let ccVotes = localStorage.getItem('ccVotes');
if (ccVotes === null) {
    ccVotes = 0;
} else{
    ccVotes = parseInt(ccVotes)
}
ccVotesTd.textContent = ccVotes;     

// Sugar Sprinkle
let ssVotesTd = document.querySelector("#qty-ss");  
let ssVotes = localStorage.getItem('ssVotes');
if (ssVotes === null) {
    ssVotes = 0;
} else{
    ssVotes = parseInt(ssVotes)
}
ssVotesTd.textContent = ssVotes; 

// Totals tracker
let totalVotesTd = document.querySelector('#qty-total');
totalVotesTd.textContent = gbVotes + ccVotes + ssVotes;

// Selectors for each individual Pastry Cookie by div (altered in index.html ***added id***)
let GBDiv = document.querySelector("#GB"); //Ginger bread (gb)
let CCDiv = document.querySelector("#CC"); //Chocolate chip (cc)
let SSDiv = document.querySelector("#SS"); //Sugar sprinkle (ss)


// Event Listener for "+" button for Gingerbread cookie (gb)
document.getElementById('add-gb').addEventListener('click', function() {
    gbVotes = gbVotes + 1;
    gbVotesTd.textContent = gbVotes;
    localStorage.setItem('gbVotes',gbVotes);

    totalVotesTd.textContent = gbVotes + ccVotes + ssVotes;
})

// Event Listener for "-" button for Gingerbread cookie (gb)
document.getElementById('minus-gb').addEventListener('click',function(e) {
    gbVotes = gbVotes - 1;
    gbVotesTd.textContent = gbVotes;
    localStorage.setItem('gbVotes',gbVotes);

    totalVotesTd.textContent = gbVotes + ccVotes + ssVotes;
})

// Event Listener for "+" button for Chocolate chip cookie (cc)
document.getElementById('add-cc').addEventListener('click', function() {
    ccVotes = ccVotes + 1;
    ccVotesTd.textContent = ccVotes;
    localStorage.setItem('ccVotes',ccVotes);

    totalVotesTd.textContent = gbVotes + ccVotes + ssVotes;
})

// Event Listener for "-" button for Chocolate chip cookie (cc)
document.getElementById('minus-cc').addEventListener('click',function(e) {
    ccVotes = ccVotes - 1;
    ccVotesTd.textContent = ccVotes;
    localStorage.setItem('ccVotes',ccVotes);

    totalVotesTd.textContent = gbVotes + ccVotes + ssVotes;
})

// Event Listener for "+" button for Sugar sprinkle cookie (ss)
document.getElementById('add-ss').addEventListener('click', function() {
    ssVotes = ssVotes + 1;
    ssVotesTd.textContent = ssVotes;
    localStorage.setItem('ssVotes',ssVotes);

    totalVotesTd.textContent = gbVotes + ccVotes + ssVotes;
})

// Event Listener for "-" button for Sugar sprinkle cookie (ss)
document.getElementById('minus-ss').addEventListener('click',function(e) {
    ssVotes = ssVotes - 1;
    ssVotesTd.textContent = ssVotes;
    localStorage.setItem('ssVotes',ssVotes);

    totalVotesTd.textContent = gbVotes + ccVotes + ssVotes;
})