function closeForm() {
    // You can add logic here to close the registration form.
    // For now, let's just hide it.
    document.querySelector('.container').style.display = 'none';
    redirectToHomePage(); // Redirect to the home page after closing.
}

function redirectToHomePage() {
    // You can replace 'home.html' with the actual URL of your home page.
    window.location.href = '../cosmo capital.html';
}

document.getElementById('register-button').addEventListener('click', function() {
    // You can add your registration logic here.
    // For a simple example, you can alert a message.
    alert('Registration button clicked');
});