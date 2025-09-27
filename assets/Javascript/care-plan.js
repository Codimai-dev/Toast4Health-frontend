const buttons = document.querySelectorAll('.price-button');
const planAndPrice = {
    Diabetes:{"Monthly": "₹2,499","Quarterly":" ₹6,999" ,"Annual":"₹24,999"},
    Elder:{"Monthly": "₹3,499 ","Quarterly":" ₹9,999 " ,"Annual":"₹35,999"},
    Cardiac:{"Monthly": "₹2,999","Quarterly":" ₹8,499 " ,"Annual":"₹29,999"},
    "PCOS-PCOD":{"Monthly": "₹2,299","Quarterly":" ₹6,499 " ,"Annual":"₹22,999"},
    "Obesity":{"Monthly": "₹2,799","Quarterly":" ₹7,999 " ,"Annual":"₹27,999"},
    Wellness:{"Monthly": "₹1,499 ","Quarterly":" ₹3,999  " ,"Annual":"₹14,999"},
    'Wellness-Advance':{"Monthly": "₹3,999 ","Quarterly":" ₹10,999  " ,"Annual":"₹39,999"},
}
buttons.forEach(button=>{
    button.addEventListener("click",(event)=>{
        const plan = button.getAttribute('plan');
       buttons.forEach(btn=>{
        if(btn.classList.contains('active-plan') && btn.getAttribute("plan") == plan)
            btn.classList.remove('active-plan')
       })
       button.classList.add('active-plan')
       const validity = button.getAttribute('validity');
       document.querySelector(`.${plan}-price`).innerHTML=planAndPrice[plan][validity]
    })
})

   const swiper = new Swiper('.mySwiper', {
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      spaceBetween: 30,
      slidesPerView: 1,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        0:{slidesPerView: 1},
        620: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
    });