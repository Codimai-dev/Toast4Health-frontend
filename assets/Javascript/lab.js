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

  // Pricing data for each package
   const pricingData = {
      "men-health-comprehensive": { mrp: 2999, rate: 1499 },
      "fever-profile-advanced": { mrp: 2499, rate: 1499 },
      "senior-female": { mrp: 5999, rate: 2499 },
      "fever-profile-comprehensive": { mrp: 2999, rate: 1999 },
      "std-essential": { mrp: 1199, rate: 599 },
      "std-comprehensive": { mrp: 14999, rate: 10999 },
      "women-advanced": { mrp: 3999, rate: 2199 },
      "gut-health": { mrp: 4999, rate: 2999 },
      "full-body-advanced": { mrp: 2999, rate: 1499 },
      "diabetes-essential": { mrp: 999, rate: 499 },
      "diabetes-advanced": { mrp: 1999, rate: 999 },
      "women-comprehensive": { mrp: 7999, rate: 3199 },
      "cancer-female": { mrp: 2999, rate: 1799 },
      "full-body-basic": { mrp: 999, rate: 499 },
      "full-body-essential": { mrp: 1999, rate: 999 },
      "cancer-male": { mrp: 2599, rate: 1499 },
      "pcod-comprehensive": { mrp: 7000, rate: 3599 },
      "pcod-basic": { mrp: 2999, rate: 1499 },
      "tax-saver": { mrp: 10999, rate: 4499 },
      "senior-male": { mrp: 4999, rate: 2399 },
      "full-body-comprehensive": { mrp: 3999, rate: 2499 },
      "weight-loss": { mrp: 3499, rate: 1999 },
      "men-advanced": { mrp: 2999, rate: 1499 },
      "skin-care": { mrp: 2999, rate: 1999 }
    };

  // Loop through all card boxes
  document.querySelectorAll('.card-box').forEach(card => {
    const key = card.getAttribute('data-package');
    const priceInfo = pricingData[key];

    if (priceInfo) {
      const savings = priceInfo.mrp - priceInfo.rate;
      const discountPercentage = ((savings / priceInfo.mrp) * 100).toFixed(0);

      // Generate pricing HTML
      card.querySelector('.price-box').innerHTML = `
        <span class="mrp">MRP: ₹${priceInfo.mrp}</span>
        <span class="offer-price">₹${priceInfo.rate}</span>
        <div class="save">Save ₹${savings} (${discountPercentage}% OFF)</div>
      `;
    }
  });
