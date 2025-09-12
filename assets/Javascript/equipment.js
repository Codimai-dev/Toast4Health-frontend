const btns = document.querySelectorAll(".key-btn");
const buyBtns = document.querySelectorAll(".buy");
const rentBtns = document.querySelectorAll(".rent");
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(btn.classList.contains('Buy')){
            buyBtns.forEach(buy=>{
                buy.classList.remove('hidden');
                   rentBtns.forEach(rent=>{
                rent.classList.add('hidden');
                
        })
        })
        }else{
             rentBtns.forEach(rent=>{
                rent.classList.remove('hidden');
                 buyBtns.forEach(buy=>{
                buy.classList.add('hidden');
        })
        })
        }
    })
})