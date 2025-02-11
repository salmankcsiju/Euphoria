let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



const carousel = document.querySelector('.carousel-items');
const items = document.querySelectorAll('.item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * (items[0].offsetWidth + 20); // Include margin
  carousel.style.transform = `translateX(${offset}px)`;
  // Disable buttons at boundaries
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === items.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < items.length - 1) currentIndex++;
  updateCarousel();
});


updateCarousel()




let menCatogory = [
  {
    id: 1,
    name: "Shirts",
    image: "image/Rectangle 20.png",

  },
  {
    id: 2,
    name: "Printed T-Shirts",
    image: "image/Rectangle 21.png",

  },
  {
    id: 3,
    name: "Plain T-Shirt",
    image: "image/Rectangle 22.png",

  },
  {
    id: 4,
    name: "Polo T-Shirt",
    image: "image/Rectangle 23.png",

  },
  {
    id: 5,
    name: "Hoodies & Sweetshirt",
    image: "image/Rectangle 20 1.png",

  },  {
    id: 6,
    name: "Jeans",
    image: "image/Rectangle 21 2.png",

  },  {
    id: 7,
    name: "Activewear",
    image: "image/Rectangle 22 3.png",

  },  {
    id: 8,
    name: "Boxers",
    image: "image/Rectangle 22 4.png",

  },
]
const menul = document.getElementById("menul");
menCatogory.forEach((catogory)=> {
  const li = document.createElement("li");
  li.innerHTML =`
                <img src="${catogory.image}" alt="${catogory.name}">
                <div class="h5">
                    <h6>${catogory.name}</h6>
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9571 7.05086C19.2843 6.72364 19.2843 6.19311 18.9571 5.86588L13.6247 0.533477C13.2975 0.206254 12.7669 0.206254 12.4397 0.533477C12.1125 0.8607 12.1125 1.39123 12.4397 1.71846L17.1796 6.45837L12.4397 11.1983C12.1125 11.5255 12.1125 12.056 12.4397 12.3833C12.7669 12.7105 13.2975 12.7105 13.6247 12.3833L18.9571 7.05086ZM0.489258 7.29628L18.3646 7.29628V5.62047L0.489258 5.62047L0.489258 7.29628Z" fill="#797979" />
                        </svg>                        
                </div>
                <p>Explore Now!</p>`
                li.onclick = ()=>{
                  window.location.href =`../html/script.html?id${catogory.id}`
                }



  menul.appendChild(li);
})

let women = [
  {
    id: 1,
    name: "Hoodies & Sweetshirt",
    image: "image/Rectangle 20 g.png",
  },
  {
    id: 2,
    name: "Coats & Parkas",
    image: "image/Rectangle 21 g.png",
  }, 
  {
    id: 3,
    name: "Tees & T-Shirt",
    image: "image/Rectangle 22 g.png",
  },  
  {
    id: 4,
    name: "Boxers",
    image: "image/Rectangle 22 g4.png",
  },
]

const girl = document.getElementById("womenul");
women.forEach((catogory)=>{
  const li = document.createElement("li");
  li.innerHTML =`            
                <img src="${catogory.image}" alt="${catogory.name}">
                <div class="h5">
                    <h6>${catogory.name}</h6>
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9571 7.05086C19.2843 6.72364 19.2843 6.19311 18.9571 5.86588L13.6247 0.533477C13.2975 0.206254 12.7669 0.206254 12.4397 0.533477C12.1125 0.8607 12.1125 1.39123 12.4397 1.71846L17.1796 6.45837L12.4397 11.1983C12.1125 11.5255 12.1125 12.056 12.4397 12.3833C12.7669 12.7105 13.2975 12.7105 13.6247 12.3833L18.9571 7.05086ZM0.489258 7.29628L18.3646 7.29628V5.62047L0.489258 5.62047L0.489258 7.29628Z" fill="#797979"/>
                        </svg>                        
                </div>
                <p>Explore Now!</p>`
  womenul.appendChild(li)
})



let products = [
  {
    id: 1,
    name:"White T-Shirt",
    Brand: "Priya’s Brand",
    price: "$13.00", 
    image: "image/img-16.jpg",
  },
  {
    id: 2,
    name:"Dark Green Sweatshirt....",
    Brand: "Roboto’s Brand",
    price: "$127.00", 
    image: "image/img-17 (1) 2.jpg",
  },
  {
    id: 3,
    name:"Levender Sweatshirt ....",
    Brand: "Jhanvi’s  Brand",
    price: "$133.00", 
    image: "image/img-18.jpg",
  },
  {
    id: 4,
    name:"Urban jacket with white ....",
    Brand: "Sagar’s  Brand",
    price: "$79.00", 
    image: "image/img-19 (1) 4.jpg",
  },
]

const light = document.getElementById("lime");
products.forEach((product)=>{
 const li = document.createElement("li")
  li.innerHTML = `                <div class="photo">
                    <img src="${product.image}" alt="${product.name}">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.71983 2.71206C6.34501 1.10986 4.0524 0.678871 2.32985 2.14601C0.607289 3.61314 0.364777 6.06612 1.71751 7.80131C2.84222 9.244 6.24597 12.2867 7.36154 13.2716C7.48635 13.3817 7.54875 13.4368 7.62155 13.4585C7.68508 13.4774 7.75459 13.4774 7.81812 13.4585C7.89092 13.4368 7.95332 13.3817 8.07813 13.2716C9.19369 12.2867 12.5974 9.244 13.7222 7.80131C15.0749 6.06612 14.862 3.59771 13.1098 2.14601C11.3577 0.694304 9.09466 1.10986 7.71983 2.71206Z" stroke="#3C4242" stroke-width="1.26066" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                </div>
                <div class="np">
                    <div class="left">
                        <h4>${product.name}</h4>
                        <p>${product.Brand}</p>
                    </div>
                    <div class="right">
                        <p>${product.price}</p>
                    </div>
                </div> `;
                li.onclick = ()=>{
                window.location.href = `html/script.html?id=${product.id}`
                }


  lime.appendChild(li)
} )

