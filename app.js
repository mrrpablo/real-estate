const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

const team =[
    { img:'./img/pm.png', title:'Marketing Manager'},
    { img:'./img/mh.png', title:'Brand Manager'},
    { img:'./img/hos.png', title:'Brand Manager'}
]

let output = document.getElementById("output");
output.innerHTML = team.map((teamMembers)=>{
    const {img, title}= teamMembers
    return(
        `
        <div class="md:w-[32%] bg-black ">
        <div class=" rounded-full h-[500px] text-center" style="backgroundColor: black;">
            <img src=${img} alt="" class="object-cover" 
                style='height:350px; object-fit: cover; '>
        </div>
        <p class="font-[500] text-[23px] leading-[23px] text-[#8b8b8b] my-[20px] text-center">${title}
        </p>
    </div>
        `
    )
})

output.appendChild(eachOutput);