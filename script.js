// Function to open modal
function openModal(movieTitle) {
    const modal = new bootstrap.Modal(document.getElementById('ticketModal'));
    document.getElementById('movieTitle').value = movieTitle;
    modal.show();
}

// Function to close modal
function closeModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('ticketModal'));
    modal.hide();
}

// Function to handle booking submission
function submitBooking() {
    const name = document.getElementById('userName').value;
    const seats = document.getElementById('seats').value;
    if (name && seats) {
        alert(`Booking Confirmed!\nName: ${name}\nSeats: ${seats}`);
        closeModal();
    } else {
        alert('Please fill out all fields.');
    }
}
