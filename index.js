let width;

setInterval(()=>{
    width = innerWidth;
}, 300)

//Evento menu click
let menu = document.querySelector(".spanMenu");
let span = document.querySelectorAll(".span");
let cont = 0;


menu.addEventListener("click", () => {
    cont++;

    if(cont % 2 != 0){
        span.item(1).style.opacity = "0";
        span.item(0).style.transform = "translateY(9px) rotate(45deg)";
        span.item(2).style.transform = "translateY(-9px) rotate(-45deg)";
        document.querySelector(".containerMenu").style.left = "0%";
    }else{
        span.item(1).style.opacity = "1";
        span.item(0).style.transform = "translateY(0px) rotate(0deg)";
        span.item(2).style.transform = "translateY(0px) rotate(0deg)";
        document.querySelector(".containerMenu").style.left = "-100%";
    }

});

// let iBrand = document.querySelectorAll(".numberBrand");
// let iShipping = document.querySelectorAll(".numberShipping");
// let numberBrand;
// let numberShipping;



// for(let i = 0; i < iBrand.length; i++){
//     numberBrand = Math.floor(Math.random()*100);
//     numberShipping = Math.floor(Math.random()*1000);
//     iBrand.item(i).textContent = "("+numberBrand+")";
//     iShipping.item(i).textContent = "("+numberShipping+")";
// }



