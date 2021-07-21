const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

function saveMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    this.count.innerText = selectedSeatsCount;
    this.total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
    const selectecSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectecSeats != null && selectecSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectecSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

//Movie select count
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    saveMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

//Seat click event

container.addEventListener('click', (e) => {
    if (
        e.target.classList.contains('seat')
        && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

// Initial count and total set
updateSelectedCount();