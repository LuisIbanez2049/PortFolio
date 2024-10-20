const images = document.querySelectorAll('.carousel-img');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('opacity-100');
  images[currentIndex].classList.add('opacity-0');

  currentIndex = (currentIndex + 1) % images.length;

  images[currentIndex].classList.remove('opacity-0');
  images[currentIndex].classList.add('opacity-100');
}

// Cambia la imagen cada 3 segundos
setInterval(showNextImage, 3000);




const images2 = document.querySelectorAll('.carousel-img2');
let currentIndex2 = 0;

function showNextImage2() {
  images2[currentIndex2].classList.remove('opacity-100');
  images2[currentIndex2].classList.add('opacity-0');

  currentIndex2 = (currentIndex2 + 1) % images2.length;

  images2[currentIndex2].classList.remove('opacity-0');
  images2[currentIndex2].classList.add('opacity-100');
}

// Cambia la imagen cada 3 segundos
setInterval(showNextImage2, 3000);



const images3 = document.querySelectorAll('.carousel-img3');
let currentIndex3 = 0;

function showNextImage3() {
  images3[currentIndex3].classList.remove('opacity-100');
  images3[currentIndex3].classList.add('opacity-0');

  currentIndex3 = (currentIndex3 + 1) % images3.length;

  images3[currentIndex3].classList.remove('opacity-0');
  images3[currentIndex3].classList.add('opacity-100');
}

// Cambia la imagen cada 3 segundos
setInterval(showNextImage3, 3000);

const images4 = document.querySelectorAll('.carousel-img4');
let currentIndex4 = 0;

function showNextImage4() {
  images4[currentIndex4].classList.remove('opacity-100');
  images4[currentIndex4].classList.add('opacity-0');

  currentIndex4 = (currentIndex4 + 1) % images4.length;

  images4[currentIndex4].classList.remove('opacity-0');
  images4[currentIndex4].classList.add('opacity-100');
}

// Cambia la imagen cada 3 segundos
setInterval(showNextImage4, 3000);