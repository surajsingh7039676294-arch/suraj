document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Function to toggle the mobile hamburger menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close the mobile menu when a navigation link is clicked (for smooth scrolling)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // ********** WHATSAPP FUNCTIONALITY **********
    // This function is triggered when the Contact form is submitted
    window.sendToWhatsApp = function(event) {
        // Prevent form submission and page reload
        event.preventDefault(); 

        // !!! IMPORTANT: ENTER YOUR WHATSAPP NUMBER HERE (with country code 91) !!!
        const yourWhatsappNumber = "917039676294"; 

        // Get data from form fields using their IDs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Construct the WhatsApp message text (%0a = New Line)
        const whatsappMessage = 
            "Hello Suraj, I am contacting you from your portfolio website.%0a%0a" +
            "Name: " + name + "%0a" + 
            "Email: " + email + "%0a" + 
            "Message: " + message;

        // Create the WhatsApp API URL. encodeURIComponent ensures special characters are handled correctly.
        const url = "https://wa.me/" + yourWhatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

        // Open the WhatsApp chat window in a new tab
        window.open(url, '_blank').focus();
        
        // Optionally reset the form fields after submission
        document.querySelector('.contact-form').reset();
    }
    // *******************************************
});