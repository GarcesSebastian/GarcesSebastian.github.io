let upPage = document.querySelector(".up");

upPage.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

let logo = document.querySelector(".containerLogo");
let home = document.querySelector(".iconNav");
let txtHome = document.querySelector(".lblNav");

let elementsHome = [logo,home,txtHome];

for(let i = 0 ; i < elementsHome.length; i++){
    elementsHome[i].addEventListener("click", () =>{
        window.location.href = '/index.html';
    });
}

let facebook = document.querySelector(".facebook");
let linkedin = document.querySelector(".linkedin");
let github = document.querySelector(".github");
let gmail = document.querySelector(".gmail");

let elementsContactMe = [facebook,linkedin,github,gmail];

elementsContactMe[0].addEventListener("click", () =>{
    window.location.href = 'https://www.facebook.com/sebastianandres.garcesgomez.3';
});

elementsContactMe[1].addEventListener("click", () =>{
    window.location.href = 'https://www.facebook.com/sebastianandres.garcesgomez.3';
});

elementsContactMe[2].addEventListener("click", () =>{
    window.location.href = 'https://github.com/GarcesSebastian';
});

elementsContactMe[3].addEventListener("click", () =>{
    window.location.href = 'https://www.facebook.com/sebastianandres.garcesgomez.3';
});

