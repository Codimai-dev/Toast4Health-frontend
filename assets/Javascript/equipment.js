const buy = document.querySelector('.buy');
const rent = document.querySelector('.rent');
const buySection = document.querySelector("#buy-equipment");
const rentSection = document.querySelector("#rent-equipment");

buy.addEventListener("click",()=>{
    if(buySection.classList.contains("hidden")){
        buySection.classList.remove("hidden");
    }
    buy.classList.add("active")
    rentSection.classList.add("hidden");
         rent.classList.remove("active")
})
rent.addEventListener("click",()=>{
    if(rentSection.classList.contains("hidden"))
        rentSection.classList.remove("hidden");
    rent.classList.add("active")
     buy.classList.remove("active")
    buySection.classList.add("hidden");
})
let form = document.getElementById("contactForm");

function sendMessage(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    let number = "9152101398";
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
        let option = document.getElementById("option").value.trim();
    let location = document.getElementById("location").value.trim();
let message = document.getElementById("notes").value.trim();
    if (!name || !email || !message ||!mobile || !option || !location) {
        alert("Please fill out all fields before sending.");
        return;
    }

    // Proper URL encoding
    let whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nLocation:${location}\nOption:${option}\nMobile:${mobile}`;
    let url = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp chat
    window.open(url, "_blank").focus();
}

// Attach event listener correctly
form.addEventListener("submit", sendMessage);
