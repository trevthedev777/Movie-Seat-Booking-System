// Global Scope Variables
const container = document.querySelector(".container");
// Selects all items with class of seat and collects them into an "array"
const seats = document.querySelectorAll(".row .seat:not(.reserved)");
const count = document.getElementById("count");
const total = document.getElementById("price");
const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value;

// Functions
/* Updates the seat count and total price based in seat selection */ 
    function updateTotalPrice() {
        // Groups the selected seats elements into a Nodelist 
        const selectedSeats = document.querySelectorAll(".row .seat.selected");

        // Converts the Nodelist values to numbers
        const selectedSeatsCount = selectedSeats.length;
        // changes the count with numbers
        count.innerText = selectedSeatsCount;
        total.innerText = selectedSeatsCount * ticketPrice;
};

// functions in event listeners parse an e param
container.addEventListener('click', function(e) {
    // if the element has a class of seat then...
    // dont select other sibling elements
    // console.log(e.target)
    if (e.target.classList.contains("seat") && 
        !e.target.classList.contains("reserved")) {
        console.log(e.target);
    } {
        e.target.classList.toggle('selected');

        updateTotalPrice();
    };
});