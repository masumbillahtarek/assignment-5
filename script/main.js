 /*
 let clickCount = 0;
let totalPrice = 0;
const ticketPrice = 20; 

function bookTicket(element) {
    if (clickCount < 4) {
        element.style.backgroundColor = "green"; 
        clickCount++;
        totalPrice += ticketPrice;
        document.getElementById("info").innerText = 
            "You have selected " + clickCount + " seats. Total Price: $" + totalPrice;
    } else {
        document.getElementById("info").innerText = "Limit reached! You cannot book more than 4 seats.";
    }
}
    */