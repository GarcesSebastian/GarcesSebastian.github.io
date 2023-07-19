let width;

setInterval(()=>{
    width = innerWidth;
}, 300)

function changeArticlesLine(){
    document.querySelector(".contentArticlesLine").classList.add("contentArticlesBars");
    document.querySelector(".contentArticlesLine").classList.remove("contentArticlesLine");
    document.querySelector(".listArticle").classList.add("listArticleBars");
    document.querySelector(".listArticle").classList.remove("listArticle");
    document.querySelector(".elementArticle").classList.add("itemArticleBars");
    document.querySelector(".elementArticle").classList.remove("elementArticle");
    document.querySelector(".topElement").classList.add("contentTopBars");
    document.querySelector(".topElement").classList.remove("topElement");
    document.querySelector(".imageArticle").classList.add("imageArticleBars");
    document.querySelector(".imageArticle").classList.remove("imageArticle");
    document.querySelector(".charactersArticle").classList.add("charactersArticleBars");
    document.querySelector(".charactersArticle").classList.remove("charactersArticle");

}

function changeArticlesBars(){
    document.querySelector(".contentArticlesBars").classList.add("contentArticlesLine");
    document.querySelector(".contentArticlesBars").classList.remove("contentArticlesBars");
    document.querySelector(".listArticleBars").classList.add("listArticle");
    document.querySelector(".listArticleBars").classList.remove("listArticleBars");
    document.querySelector(".itemArticleBars").classList.add("elementArticle");
    document.querySelector(".itemArticleBars").classList.remove("itemArticleBars");
    document.querySelector(".contentTopBars").classList.add("topElement");
    document.querySelector(".contentTopBars").classList.remove("contentTopBars");
    document.querySelector(".imageArticleBars").classList.add("imageArticle");
    document.querySelector(".imageArticleBars").classList.remove("imageArticleBars");
    document.querySelector(".charactersArticleBars").classList.add("charactersArticle");
    document.querySelector(".charactersArticleBars").classList.remove("charactersArticleBars");
}

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
        document.querySelector(".order").style.transform = "rotate(-180deg)";
        document.querySelector(".txtOrder").style.color = "var(--segundario)";
        document.querySelector(".order").style.color = "var(--segundario)";
        document.querySelector(".selectOrder").style.display = "flex";
    }else{
        document.querySelector(".order").style.transform = "rotate(0deg)";
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
        document.querySelector(".contentArticlesLine").style.display = "none";
        document.querySelector(".contentArticlesBars").style.display = "flex";
    });

orderBars.addEventListener("click", () =>{
        document.querySelector(".fa-bars").style.color = "var(--segundario)";
        document.querySelector(".fa-border-all").style.color = "var(--texto-del-boton)";
        document.querySelector(".contentArticlesLine").style.display = "flex";
        document.querySelector(".contentArticlesBars").style.display = "none";
    });


let filterQ = document.querySelector(".filterQueries");
let contFilterQ = 0;
filterQ.addEventListener("click", () =>{
    contFilterQ++;

    if(contFilterQ % 2 != 0){
        document.querySelector(".iconFilter").style.transform = "rotate(-180deg)";
        document.querySelector(".containerFilterQ").style.display = "flex";
        document.querySelector(".contentArticlesBars").style.top = ".5%";
        document.querySelector(".contentArticlesLine").style.top = ".5%";
    }else{
        document.querySelector(".iconFilter").style.transform = "rotate(0deg)";
        document.querySelector(".containerFilterQ").style.display = "none";
        document.querySelector(".contentArticlesBars").style.top = "0%";
        document.querySelector(".contentArticlesLine").style.top = "0%";
    }
});


