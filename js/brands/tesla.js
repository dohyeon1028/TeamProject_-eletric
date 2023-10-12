const tesla = document.querySelector("#tesla")
const tesla_img = tesla.querySelectorAll(".imgBox img");
const tesla_btns = tesla.querySelectorAll(".active_btns li");

tesla_btns.forEach((el, index) => {
    el.addEventListener("click", (e)=>{
        e.preventDefault();

        tesla.querySelector(".imgBox img.on").classList.remove("on");
        tesla.querySelector(".active_btns li.on").classList.remove("on");


        tesla_btns[index].classList.add("on");
        tesla_img[index].classList.add("on");
    })
});

const btns = tesla.querySelector(".btns");
const prev = tesla.querySelector(".btns .prev");
const next = tesla.querySelector(".btns .next");

window.addEventListener("scroll", ()=>{
    if(scrollY == sectionTop[1]){
        btns.classList.add("on");
    }else{
        btns.classList.remove("on");
    }
})

window.addEventListener("load", ()=>{
    if(scrollY == sectionTop[1]){
        btns.classList.add("on");
    }else{
        btns.classList.remove("on");
    }
})

let tesla_left = 0;
prev.addEventListener("click", ()=>{
    if(tesla_left === 0) return;
    tesla_left = tesla_left + 100;
    tesla_move(tesla_left)
})
next.addEventListener("click", ()=>{
    if(tesla_left === -200) return;
    tesla_left = tesla_left - 100;
    tesla_move(tesla_left)
})
function tesla_move(tesla_left){
    tesla.style.left = `${tesla_left}vw`;
}