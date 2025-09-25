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