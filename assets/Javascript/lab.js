const buttons = document.querySelectorAll('.tab');
const DiagnosticTest = document.querySelector("#Diagnostic-test")
const AdvanceDiagnostics = document.querySelector("#Advance-diagnostics")
const comprehensiveHealthCheckup = document.querySelector("#comprehensive-health-checkup");
console.log(buttons)
buttons.forEach(btn => {
    btn.addEventListener("click",()=>{
         buttons.forEach(btn=>btn.classList.remove("active"))
        if(btn.classList.contains("Diagnostic")){
            btn.classList.add("active");
            if(DiagnosticTest.classList.contains('hidden'))DiagnosticTest.classList.remove("hidden");
            AdvanceDiagnostics.classList.add("hidden");
            comprehensiveHealthCheckup.classList.add("hidden")

        }else if(btn.classList.contains("Advance-diagnostics")){
             btn.classList.add("active")
             if(AdvanceDiagnostics.classList.contains('hidden'))AdvanceDiagnostics.classList.remove("hidden");
            DiagnosticTest.classList.add("hidden");
            comprehensiveHealthCheckup.classList.add("hidden")
        }else{
            btn.classList.add("active")
             if(comprehensiveHealthCheckup.classList.contains('hidden'))comprehensiveHealthCheckup.classList.remove("hidden")
                AdvanceDiagnostics.classList.add("hidden");
            DiagnosticTest.classList.add("hidden");
        }
    })
})
let form = document.getElementById("contact-form");

function sendMessage(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    let number = "9152101398";
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("notes").value.trim();
        let mobile = document.getElementById("mobile").value.trim();

    if (!name || !email || !mobile || !message) {
        alert("Please fill out all fields before sending.");
        return;
    }

    // Proper URL encoding
    let whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nMobile:${mobile}`;
    let url = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp chat
    window.open(url, "_blank").focus();
}

// Attach event listener correctly
form.addEventListener("submit", sendMessage);
