const buttons = document.querySelectorAll('.price-button');
const planAndPrice = {
    Diabetes:{
      "Monthly": "₹2,499",
      "Quarterly":" ₹6,999" ,
      "Annual":"₹24,999",
      "Content":
        {
    "Monthly": [
      "Virtual GP Consultations/month",
      "20% discount on diabetes medications",
      "10% discount on insulins",
      "Free blood test - Random Sugar, CBC",
      "1 nutrition consultation",
      "Personalized Diabetic meal plans",
      "Home nursing care - 10% discount on services",
      "Health tips to Manage Diabetes",
      "1 physio assessment session free"
    ],
    "Quarterly": [
      "Virtual GP Consultations/month",
      "Free Glucose monitoring kit (glucometer + 10 strips)",
      "20% discount on diabetes medications",
      "10% discount on insulins",
      "Free quarterly comprehensive blood tests (HbA1c, lipid profile, kidney function, CBC)",
      "1 nutrition consultation with certified dietitians / Month",
      "Personalized Diabetic meal plans",
      "Foot care guidance PDF",
      "Mental health counseling - 1 FREE",
      "Home nursing care - 10% discount on services",
      "Health tips to Manage Diabetes",
      "1 physio assessment session free"
    ],
    "Annual": [
      "Virtual GP Consultations/month",
      "Free Glucose monitoring kit (glucometer + 25 strips)",
      "20% discount on diabetes medications",
      "10% discount on insulins",
      "Free comprehensive blood tests (HbA1c, lipid profile, kidney function, CBC, Vitamin D, Vitamin B12)",
      "1 nutrition consultation with certified dietitians / Month (2/month for yearly plan)",
      "Personalized Diabetic meal plans",
      "Foot care guidance PDF",
      "Mental health counseling - 1 FREE 1 SESSION",
      "Home nursing care - 10% discount on services",
      "Health tips to Manage Diabetes",
      "1 physio assessment session free",
      "Free HBA1C TEST every quarter"
    ]
  }
    },
    Elder:{
    "Monthly": "₹2999",
    "Quarterly": "₹9999",
    "Annual": "₹34999",
    "Content": {
      "Monthly": [
        "1 Virtual GP Consultation/month",
        "Free BLOOD TEST - CBC, Ra Factor, Lipid, Kidney Profile",
        "20% discount on all medications",
        "Physiotherapy sessions - 1 session",
        "Home nursing care - 10% discount on all services",
        "Mental health support - Monthly counseling sessions",
        "Nutrition consultation",
        "Medical equipment rental - 15% discount"
      ],
      "Quarterly": [
        "1 Virtual GP Consultation/month",
        "1 Virtual consultation with geriatric specialists",
        "Free comprehensive health screening - CBC, Kidney, Lipid Profile, Thyroid Profile, Ra Factor, Vitamin B12, Vitamin D",
        "20% discount on all medications",
        "Physiotherapy sessions - 1 session/month at home with virtual follow-up every fortnight",
        "Home nursing care - 10% discount on all services",
        "Mental health support - Monthly counseling sessions",
        "Nutrition consultation",
        "Medical equipment rental - 15% discount (wheelchairs, walkers, etc.)"
      ],
      "Annual": [
        "1 Virtual GP Consultation/month",
        "1 Virtual consultation with geriatric specialists every quarter",
        "Free comprehensive health screening every 6 months",
        "20% discount on all medications",
        "Physiotherapy sessions - 1 session/month at home with virtual follow-up every week",
        "Home nursing care - 10% discount on all services",
        "Mental health support - Monthly counseling sessions",
        "Nutrition consultation",
        "Medical equipment rental - 15% discount (wheelchairs, walkers, etc.)",
        "Free annual dental check-up"
      ]
    }
  },
    Cardiac:{"Monthly": "₹2499",
    "Quarterly": "₹6499",
    "Annual": "₹22999",
    "Content": {
      "Monthly": [
        "1 GP Virtual consultation",
        "Free ECG monitoring at home",
        "20% discount on cardiac medications",
        "Complimentary Blood Test - CBC, Lipid Profile, HSCRP",
        "Heart-healthy nutrition planning",
        "Cardiac rehabilitation exercises - Online",
        "Stress management counseling",
        "Home nursing / Caretaker - 10% discount",
        "Discount on healthcare products"
      ],
      "Quarterly": [
        "1 GP Virtual consultation/month",
        "Free ECG monitoring at home - 1 test included",
        "20% discount on cardiac medications",
        "Quarterly comprehensive cardiac blood tests",
        "Heart-healthy nutrition planning",
        "1 Physio session free - Virtual follow-up once per month",
        "Blood pressure monitoring - Free digital BP machine",
        "Stress management counseling",
        "Home nursing / Caretaker - 10% discount",
        "Discount on healthcare products"
      ],
      "Annual": [
        "1 GP Virtual consultation/month",
        "Free ECG monitoring at home - 1 test per quarter",
        "20% discount on cardiac medications",
        "Comprehensive cardiac blood tests - 2 times per year",
        "Heart-healthy nutrition planning",
        "1 Physio session free - Virtual follow-up once per month",
        "Blood pressure monitoring - Free digital BP machine",
        "Stress management counseling",
        "Home nursing / Caretaker - 10% discount",
        "Discount on healthcare products"
      ]
    }},
    "PCOS-PCOD":{ "Monthly": "₹1999",
    "Quarterly": "₹5999",
    "Annual": "₹19999",
    "Content": {
      "Monthly": [
        "1 Nutrition Virtual consultation",
        "20% discount on hormonal medications and supplements",
        "Hormone panel tests (Testosterone, Thyroid, LH, FSH)",
        "PCOS-specific nutrition counseling",
        "Weight management support with personalized plans",
        "Mental health counseling",
        "Yoga and exercise plans specifically for PCOS",
        "Supplement guidance"
      ],
      "Quarterly": [
        "1 Nutrition Virtual consultation/month",
        "1 consultation with gynecologists",
        "20% discount on hormonal medications and supplements",
        "Comprehensive blood test package: CBC, Thyroid, LH, FSH, Prolactin, Total Testosterone, Lipid Profile",
        "PCOS-specific nutrition counseling",
        "Weight management support with personalized plans",
        "Mental health counseling - 1 session/month",
        "Yoga and exercise plans specifically for PCOS",
        "Supplement guidance",
        "Lifestyle modification coaching"
      ],
      "Annual": [
        "1 Nutrition Virtual consultation/month",
        "1 consultation with gynecologists every quarter",
        "20% discount on hormonal medications and supplements",
        "Comprehensive advanced blood test package: CBC, Thyroid, LH, FSH, Prolactin, Total Testosterone, Lipid Profile, Insulin Fasting, Fasting Sugar",
        "PCOS-specific nutrition counseling",
        "Weight management support with personalized plans",
        "Mental health counseling - 1 session/month",
        "Yoga and exercise plans specifically for PCOS",
        "Supplement guidance",
        "Lifestyle modification coaching"
      ]
    }},
    "Obesity":{"Monthly": "₹2799",
    "Quarterly": "₹7999",
    "Annual": "₹27999",
    "Content": {
      "Monthly": [
        "1 GP Virtual consultation",
        "20% discount on medication",
        "Comprehensive blood test package: CBC, Lipid Profile, Thyroid Profile, Vitamin B12, Vitamin D, Kidney Profile, Fasting Sugar",
        "Personalized Indian meal plans for weight management",
        "Virtual group training - 20 sessions/month",
        "Supplement recommendations and discounts"
      ],
      "Quarterly": [
        "1 GP Virtual consultation",
        "Free weighing scale provided at the start of the plan",
        "20% discount on medication",
        "Comprehensive blood test package: CBC, Lipid Profile, Thyroid Profile, Vitamin B12, Vitamin D, Kidney Profile, Fasting Sugar, Insulin Fasting, HbA1c",
        "Personalized Indian meal plans for weight management",
        "Virtual group training - 20 sessions/month",
        "Supplement recommendations and discounts"
      ],
      "Annual": [
        "1 GP Virtual consultation / quarter",
        "Free weighing scale provided at the start of the plan",
        "20% discount on medication",
        "Complimentary comprehensive blood test every quarter: CBC, Lipid Profile, Thyroid Profile, Vitamin B12, Vitamin D, Kidney Profile, Fasting Sugar, Insulin Fasting, HbA1c",
        "Personalized Indian meal plans for weight management",
        "Virtual group training - 20 sessions/month",
        "Supplement recommendations and discounts"
      ]
    }},
    Wellness:{ "Monthly": "₹1499",
    "Quarterly": "₹3999",
    "Annual": "₹13999",
    "Content": {
      "Monthly": [
        "1 Virtual GP consultation",
        "Complimentary blood test package: CBC, Lipid Profile, Kidney Profile, Thyroid Profile, Iron Profile, Vitamin B12, Vitamin D",
        "Up to 20% discount on all medications",
        "Nutrition consultation - 1 free session",
        "Mental wellness - 1 free session",
        "Basic home care services - 10% discount"
      ],
      "Quarterly": [
        "1 Virtual GP consultation",
        "Complimentary blood test package: CBC, Lipid Profile, Kidney Profile, Thyroid Profile, Iron Profile, Vitamin B12, Vitamin D, HsCRP, ESR",
        "Up to 20% discount on all medications",
        "Nutrition consultation - monthly session",
        "Mental wellness - 1 free session",
        "Basic home care services - 10% discount"
      ],
      "Annual": [
        "6 Virtual GP consultations per year",
        "Complimentary blood test package: CBC, Lipid Profile, Kidney Profile, Thyroid Profile, Iron Profile, Vitamin B12, Vitamin D, HsCRP, ESR, RA Factor",
        "Up to 20% discount on all medications",
        "Nutrition consultation - monthly session",
        "Mental wellness - 1 free session",
        "Basic home care services - 10% discount",
        "Free basic dental check-up at home"
      ]
    }},
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
      //  document.querySelector(`.${plan}-price`).innerHTML=planAndPrice[plan][validity]
       const contentlist = document.querySelector(`#${plan}-list`);
       contentlist.innerHTML="";
       const content = planAndPrice[plan].Content[validity];
       content.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  contentlist.appendChild(li);
});
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