let form = document.getElementById("contactForm");
function sendMessage(event) {
    // Prevent form from refreshing the page
    event.preventDefault();
    console.log("hello")
    let number = "9152101398";
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let location = document.getElementById("location").value.trim();
        let notes = document.getElementById("notes").value.trim();

    if (!name || !mobile || !location ||!notes) {
        alert("Please fill out all fields before sending.");
        return;
    }

    // Proper URL encoding
    let whatsappMessage = `Name: ${name}\Mobile: ${mobile}\location: ${location}\Query: ${notes}`;
    let url = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp chat
    window.open(url, "_blank").focus();
}

// Attach event listener correctly
form.addEventListener("submit", sendMessage);
