const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

const team =[
    { img:'./img/pm2.png', title:'Marketing Manager'},
    { img:'./img/mh.png', title:'Brand Manager'},
    { img:'./img/hos.png', title:'Brand Manager'}
]

let output = document.getElementById("output");
output.innerHTML = team.map((teamMembers) =>{
    const {img, title} = teamMembers
    return(
        `
        <div class="md:w-[32%]">
            <div class=" rounded-lg h-[100px]  bg-gray-400">
                <img src=${img} alt=""
                    style='height:350px; object-fit: cover;'>
            </div>
            <p class="font-[500] text-[23px] leading-[23px] text-[#8b8b8b] my-[20px] text-center">${title}
            </p>
        </div>
        `
    )
})

// output.appendChild(eachOutput);

const offer = [
    {
      img: "./img/insurance.png",
      title: "Insurance",
      text: "This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresThis is where you" },
    {
      img: "./img/insurance.png",
      title: "Insurance",
      text: "This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresThis is where you" },
    { img: "./img/eng.png", title: "Service Engineer", text: "This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresThis is where you" },
    { img: "./img/customer.png", title: "24/7 Customer Service", text: "This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresThis is where you"},
    { img: "./img/customer.png", title: "24/7 Customer Service", text: "This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresThis is where you"},
    { img: "./img/payment.png", title: "Installmental Payment", text: "This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresThis is where you"},
  ];
  
  let offering = document.getElementById("offering");
  offering.innerHTML = offer.map((offers) => {
    const { img, title, text } = offers;
    return `
          <div class="bg-white px-[30px] py-[45px] md:w-[31%] mt-[25px] md:mt-0 md:mb-[30px]">
                      <div class="flex items-center gap-[15px]">
                          <img src=${img} alt="">
                          <h2 class="font-[700] text-[20px] leading-[24px] text-[#000]">${title}</h2>
                      </div>
                      <p
                          class="para text-justify py-[15px] px-[10px] font-[500] text-[18px] leading-[22px] text-[#636363] mt-[20px]">${text}
                      </p>
          </div>
          `;
  });
  
  console.log(offering);
  console.log(offering.innerHTML);