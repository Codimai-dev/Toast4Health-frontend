document.querySelector(".booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent normal form submission

    // WhatsApp number (replace with your own number)
    const phoneNumber = "9152101398";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const location = document.getElementById("location").value.trim();
    const medicine = document.getElementById("medicine").value.trim();
    const notes = document.getElementById("notes").value.trim();

    // Validate required fields
    if (!name || !mobile || !location) {
        alert("Please fill in all required fields: Name, Mobile, and Location.");
        return;
    }

    // Format the WhatsApp message
    let message = `*New Callback Request*%0A%0A`;
    message += `*Name:* ${name}%0A`;
    message += `*Mobile:* ${mobile}%0A`;
    if (email) message += `*Email:* ${email}%0A`;
    message += `*Location:* ${location}%0A`;
    if (medicine) message += `*Medicine/Product:* ${medicine}%0A`;
    if (notes) message += `*Additional Notes:* ${notes}%0A`;

    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
});

