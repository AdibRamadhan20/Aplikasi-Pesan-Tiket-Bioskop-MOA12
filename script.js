// Function to open modal
function openModal(movieTitle) {
    const modal = new bootstrap.Modal(document.getElementById('ticketModal'));
    document.getElementById('movieTitle').value = movieTitle;
    
    // Tentukan gambar berdasarkan judul film
    const movieImages = {
        "The Batman": "Assets/batman.jpg",
        "Spider-Man : Into The Spider-Verse": "Assets/spiderman.jpeg",
        "Spirited Away": "Assets/spiritedaway.jpg",
        "Transformers : Rise Of The Beasts": "Assets/transformers.jpg",
        "Venom : The Last Dance": "Assets/venom.jpg",
        "Your Name": "Assets/yourname.jpg"
    };

    // Ganti sumber gambar modal sesuai film
    const modalMovieImg = document.getElementById('modalMovieImg');
    modalMovieImg.src = movieImages[movieTitle];

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

