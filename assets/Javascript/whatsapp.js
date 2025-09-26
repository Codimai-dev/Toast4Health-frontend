let form = document.getElementById("contact-form");

function sendMessage(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    let number = "9152101398";
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("form-email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before sending.");
        return;
    }

    // Proper URL encoding
    let whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    let url = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp chat
    window.open(url, "_blank").focus();
}

// Attach event listener correctly
form.addEventListener("submit", sendMessage);
