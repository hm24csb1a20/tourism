document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('hotelForm');
    
    form.addEventListener('submit', function(event) {
        // Hotel selection validation
        const hotel = document.getElementById('hotel').value;
        if (!hotel) {
            alert('Please select a hotel.');
            event.preventDefault();
            return;
        }

        // Phone number validation
        const phone = document.getElementById('phone').value;
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            event.preventDefault();
            return;
        }

        // Date validation: entry date must be earlier than exit date
        const entryDate = document.getElementById('entry').value;
        const exitDate = document.getElementById('exit').value;
        if (entryDate && exitDate && entryDate > exitDate) {
            alert('Exit date must be later than entry date.');
            event.preventDefault();
            return;
        }
        // Show confirmation popup
        const isConfirmed = confirm('Are you sure you want to submit the form?');
        if (!isConfirmed) {
            event.preventDefault(); // Prevent form submission if user clicks "Cancel"
        }
    });
});
