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