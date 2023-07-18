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

let order = document.querySelector(".contentOrder");
let contOrder = 0;

order.addEventListener("click", () =>{
    contOrder++;

    if(contOrder % 2 != 0){
        document.querySelector(".order").classList.remove("fa-chevron-down");
        document.querySelector(".order").classList.add("fa-chevron-up"); 
        document.querySelector(".txtOrder").style.color = "var(--segundario)";
        document.querySelector(".order").style.color = "var(--segundario)";
        document.querySelector(".selectOrder").style.display = "flex";
    }else{
        document.querySelector(".order").classList.add("fa-chevron-down");
        document.querySelector(".order").classList.remove("fa-chevron-up");    
        document.querySelector(".txtOrder").style.color = "var(--texto-del-boton)";
        document.querySelector(".order").style.color = "var(--texto-del-boton)";
        document.querySelector(".selectOrder").style.display = "none";
    }

});


let orderLine = document.querySelector(".orderLine");
let orderBars = document.querySelector(".orderBars");


orderLine.addEventListener("click", () =>{
        document.querySelector(".fa-border-all").style.color = "var(--segundario)";
        document.querySelector(".fa-bars").style.color = "var(--texto-del-boton)";
});

orderBars.addEventListener("click", () =>{
        document.querySelector(".fa-bars").style.color = "var(--segundario)";
        document.querySelector(".fa-border-all").style.color = "var(--texto-del-boton)";
});



