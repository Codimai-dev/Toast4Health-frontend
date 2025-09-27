let forms = document.getElementById("contact-form");
function sendMessage(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    let number = "9152101398";
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let location = document.getElementById("location").value.trim();
    if (!name || !phone || !location) {
        alert("Please fill out all fields before sending.");
        return;
    }

    // Proper URL encoding
    let whatsappMessage = `Name: ${name}\phone: ${phone}\location: ${location}`;
    let url = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp chat
    window.open(url, "_blank").focus();
}

// Attach event listener correctly
forms.addEventListener("submit", sendMessage);
