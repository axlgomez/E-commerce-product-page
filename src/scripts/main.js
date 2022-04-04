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

// modal cart

const cart = document.querySelector("#cart");

cart.addEventListener("click", ()=>{
  document.querySelector("#modal").classList.toggle("block");
});

//Add items to the cart
let amount = document.querySelector("#amount");
const AddToCart = document.querySelector("#AddCart");

let product = [
  {
    image: '/build/images/image-product-1.jpg',
    name: 'Autumn Limited Edition...',
    price: 125,
    inCart: 0
  }

];

AddToCart.addEventListener("click", ()=>{
  if(amount.innerHTML >= 1){
    cartNumber(product);
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
  let cartItems = localStorage.getItem("productInCart");
  cartItems = JSON.parse(cartItems);

    product.inCart = amount.innerHTML;
      cartItems = {
        product: product
    }


  localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

onLoadCartNumber();