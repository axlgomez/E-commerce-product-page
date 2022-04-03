//nav

const menu = document.querySelector("#menu");
const myNav = document.querySelector("#myNav");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("fa-xmark");
    myNav.classList.toggle("expand");
});

// slider

const btnRight = document.querySelector("#btn-right");
const btnLeft = document.querySelector("#btn-left");
let slides = document.getElementsByClassName("container__slider");


let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) { showSlides(slideIndex += n);}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

setInterval(() => { plusSlides(1)}, 4000);

btnRight.addEventListener("click", ()=>{ plusSlides(-1) });

btnLeft.addEventListener("click", ()=>{ plusSlides(1) });

// increase / decrease amount

let i = 0;

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");

function increase () { document.querySelector("#amount").innerHTML = ++i;}

function decrease () {
  if(i == 0){
    i;
  }else{
    document.querySelector("#amount").innerHTML = --i;
  }
}

plus.addEventListener("click", ()=>{ increase() });

minus.addEventListener("click", ()=>{ decrease() });
