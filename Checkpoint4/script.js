
// JavaScript for dynamic country names
const countries = ["India", "Australia", "United States", "France", "Germany", "Japan"];
let index = 0;

function changeCountry() {
    const countryElement = document.getElementById('dynamic-countries');
    countryElement.textContent = `Visit ${countries[index]}`;
    index = (index + 1) % countries.length;
}

setInterval(changeCountry, 200); // Change every 0.2 seconds

// Form validation
const form = document.getElementById('booking-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const description = document.getElementById('description').value;

    if (startDate > endDate) {
        alert('End date must be after the start date.');
    } else if (description.length >= 50 && description.length <= 500) {
        alert('Booking successful!');
        form.reset(); // Clear the form fields
    } else {
        alert('Please fill out all fields correctly.');
    }
});

// JavaScript to handle star rating interaction
const ratingStars = document.querySelectorAll('.star');

ratingStars.forEach(star => {
    star.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        clearStars(this.parentNode);
        selectStars(this.parentNode, value);
    });
});

function clearStars(starContainer) {
    const stars = starContainer.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('selected'));
}

function selectStars(starContainer, value) {
    const stars = starContainer.querySelectorAll('.star');
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
        }
    });
}
