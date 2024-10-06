// script.js
document.getElementById('settingsButton').addEventListener('click', function() {
    // For now, we'll just display a message. You can change this to redirect to a settings page later.
    alert('Settings functionality coming soon!');
    
    // To redirect to a settings page, uncomment this line:
    // window.location.href = 'settings.html';
});

// Form submission logic
document.querySelector('.ngo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const readyToDonate = document.getElementById('readyToDonate').checked;

    // For demonstration purposes, display the values in the console
    console.log(`Name: ${name}`);
    console.log(`Place: ${place}`);
    console.log(`Ready to Donate: ${readyToDonate ? 'Yes' : 'No'}`);

    // Display a simple confirmation message
    alert('Thank you for submitting your details!');
});
