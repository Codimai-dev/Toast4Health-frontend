let form = document.getElementById("contactForm");
let form2 = document.getElementById("contact-form");

function sendMessage(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    let number = "9152101398";
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let location = document.getElementById("location").value.trim();
     let notes = document.getElementById("notes").value.trim();

    if (!name || !email || !location ||!mobile || !notes) {
        alert("Please fill out all fields before sending.");
        return;
    }

    // Proper URL encoding
    let whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${notes}\nMobile:${mobile}\nLocation:${location}`;
    let url = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp chat
    window.open(url, "_blank").focus();
}

// Attach event listener correctly
form.addEventListener("submit", sendMessage);
form2.addEventListener("submit",sendMessage)