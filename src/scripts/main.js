//nav

const menu = document.querySelector("#menu");
const myNav = document.querySelector("#myNav");
const navContainer = document.querySelector("#navContainer");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("fa-xmark");
    myNav.classList.toggle("expand");
    navContainer.classList.toggle("expand");
});

// slider

const btnRight = document.querySelector("#btn-right");
const rightBtn = document.querySelector("#right-btn");
const btnLeft = document.querySelector("#btn-left");
const leftBtn = document.querySelector("#left-btn");
let slides = document.getElementsByClassName("container__slider");
let lightboxSlider = document.getElementsByClassName("lightbox__slider");
let currentDots = document.getElementsByClassName("container__column");
let lightboxCurrentDots = document.getElementsByClassName("lightbox__column");
let dots = document.getElementsByClassName("container__demo");
let lightboxDots = document.getElementsByClassName("lightbox__demo");

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}


let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) { showSlides(slideIndex += n);}

function currentSlide(n) { showSlides(slideIndex = n);}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n > lightboxSlider.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if (n < 1) {slideIndex = lightboxSlider.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < lightboxSlider.length; i++) {
    lightboxSlider[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  for (i = 0; i < lightboxDots.length; i++) {
    lightboxDots[i].className = lightboxDots[i].className.replace("active", "");
  }
  for (i = 0; i < currentDots.length; i++) {
    currentDots[i].className = currentDots[i].className.replace("activo", "");
  }
  for (i = 0; i < lightboxCurrentDots.length; i++) {
    lightboxCurrentDots[i].className = lightboxCurrentDots[i].className.replace("activo", "");
  }

  slides[slideIndex-1].style.display = "block";
  lightboxSlider[slideIndex-1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  lightboxDots[slideIndex - 1].className += " active";
  currentDots[slideIndex - 1].className += " activo";
  lightboxCurrentDots[slideIndex - 1].className += " activo";
}

setInterval(() => { plusSlides(1)}, 4000);

btnRight.addEventListener("click", ()=>{ plusSlides(-1) });
rightBtn.addEventListener("click", ()=>{ plusSlides(-1) });

btnLeft.addEventListener("click", ()=>{ plusSlides(1) });
leftBtn.addEventListener("click", ()=>{ plusSlides(1) });

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

// modal cart

const cart = document.querySelector("#cart");

cart.addEventListener("mouseover", ()=>{
  document.querySelector("#modal").classList.toggle("block");
});

//Add items to the cart
let amount = document.querySelector("#amount");
const AddToCart = document.querySelector("#AddCart");

let product = [
  {
    name: 'Autumn Limited Edition...',
    price: 125,
    inCart: 0
  }

];

AddToCart.addEventListener("click", ()=>{
  if(amount.innerHTML >= 1){
    cartNumber(product);
    totalCost(product);
    displayCart();
    document.querySelector("#modal").classList.add("block");
    setTimeout(() => {
      document.querySelector("#modal").classList.remove("block");
    }, 3000);
  }
});

function onLoadCartNumber(){
  let productNumber = localStorage.getItem('cartNumber');

  if(productNumber){
    document.querySelector(".nav__amount").textContent = productNumber;
    document.querySelector(".nav__amount").classList.add("opacity");
  }
}

function cartNumber(product){
  let productNumber = localStorage.getItem('cartNumber');
  productNumber = parseInt(amount.innerHTML);
  // console.log(amount.innerHTML);

  if(productNumber){
    localStorage.setItem('cartNumber', amount.innerHTML);
    document.querySelector(".nav__amount").textContent = amount.innerHTML;
    document.querySelector(".nav__amount").classList.add("opacity");
  } else {
    localStorage.setItem('cartNumber', amount.innerHTML);
    document.querySelector(".nav__amount").textContent = amount.innerHTML;
    document.querySelector(".nav__amount").classList.add("opacity");
  }

  setItem(product);
}

function setItem(product){

  let cartItems = JSON.parse(localStorage.getItem('productInCart'));

  product[0].inCart = amount.innerHTML;
    cartItems = {
      [product[0].name]: product
    }

  localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function totalCost(product){
  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', product[0].price  * product[0].inCart );
    } else{
      localStorage.setItem('totalCost', product[0].price * product[0].inCart );
    }

}

function displayCart(){
  let cartItems = JSON.parse(localStorage.getItem('productInCart'));
  let modalContainer = document.querySelector(".modal__container");

  if(cartItems && modalContainer){
    Object.values(cartItems).map(item => {
      modalContainer.innerHTML = `<div class="modal__carrito">
    <div class="modal__img">
    <img src="/build/images/image-product-1.jpg" alt="image-product">
    </div>
    <div class="modal__price">
        <p class="modal__name">${item[0].name}</p>
        <div class="modal__total">
            <p class="modal__number">$${item[0].price}.00</p>
            <p class="modal__number">x</p>
            <p class="modal__number">${item[0].inCart}</p>
            <strong>$${item[0].price * item[0].inCart}.00</strong>
        </div>
    </div>
    <div class="modal__delete">
        <img id="delete" src="/build/images/icon-delete.svg" alt="icon-delete">
    </div>
  </div>
  <button class="modal__button">
    Checkout
    </button>
    `
    document.querySelector("#cartEmpty").classList.remove("empty");

      document.querySelector("#delete").addEventListener("click", ()=>{
        localStorage.clear();
        modalContainer.innerHTML = '';
        document.querySelector(".nav__amount").textContent = '';
        document.querySelector("#cartEmpty").classList.add("empty");
        setTimeout(() => {
          document.querySelector("#modal").classList.remove("block");
        }, 2000);
      });
    });
  }else {
    document.querySelector("#cartEmpty").classList.add("empty");
  }

}

onLoadCartNumber();
displayCart();

