// Global Scope Variables
const container = document.querySelector(".container");
// Selects all items with class of seat and collects them into an "array"
const seats = document.querySelectorAll(".row .seat:not(.reserved)");
const count = document.getElementById("count");
const total = document.getElementById("price");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// Functions
/* Saves the selected seats for the movie and the price */ 
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

/* Updates the seat count and total price based in seat selection */ 
function updateTotalPrice() {

    // Groups the selected seats elements into a Nodelist 
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    // copy selected seats into array
    // map through array
    // return a new array indices
    // use spread operator to access selectedSeats values
    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat);
    });

    // Store to local storage
    localStorage.setItem("selected seats", JSON.stringify(seatsIndex));

    console.log(seatsIndex)

    // Converts the Nodelist values to numbers
    const selectedSeatsCount = selectedSeats.length;

    // changes the count with numbers
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
};

// Movie Select Event 
movieSelect.addEventListener("change", function(e) {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateTotalPrice();
})

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