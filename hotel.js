// script.js
document.getElementById('settingsButton').addEventListener('click', function() {
    // You can redirect to a settings page here, or show a pop-up.
    alert('Settings functionality coming soon!');
    
    // To redirect to a settings page:
    // window.location.href = 'settings.html';
});

// Handle form submission
document.querySelector('.hotel-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const hotelName = document.getElementById('hotelName').value;
    const place = document.getElementById('place').value;
    const foodType = document.getElementById('foodType').value;
    const amountOfFood = document.getElementById('amountOfFood').value;
    const makingTime = document.getElementById('makingTime').value;

    // Log the values to the console (for testing purposes)
    console.log(`Hotel Name: ${hotelName}`);
    console.log(`Place: ${place}`);
    console.log(`Type of Food: ${foodType}`);
    console.log(`Amount of Food: ${amountOfFood}`);
    console.log(`Making Time: ${makingTime} minutes`);

    // Display a confirmation message
    alert(`Details for ${hotelName} submitted!`);
});
