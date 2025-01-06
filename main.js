const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click" , (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
   navLinks.classList.remove("open");
   menuBtnIcon.setAttribute("class","ri-menu-3-line");
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".header__image img", {
    ...ScrollRevealOption,
    origin: "right",
    interval: 500,
});
ScrollReveal().reveal(".header__content h1", {
    ...ScrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header__content .section__description", {
    ...ScrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".header__content form", {
    ...ScrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".choose__image img", {
    ...ScrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".choose__content .section__subheader", {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".choose__content .section__header", {
    ...ScrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".choose__list li", {
    ...ScrollRevealOption,
    delay: 1500,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 3, // Default for desktop
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next", // Enable "Next" button
      prevEl: ".swiper-button-prev", // Enable "Prev" button
    },
    breakpoints: {
      320: {
        slidesPerView: 1, // Mobile: 1 slide
      },
      768: {
        slidesPerView: 2, // Tablet: 2 slides
      },
      1024: {
        slidesPerView: 3, // Desktop: 3 slides
      },
    },
  });
  



ScrollReveal().reveal(".explore__image img", {
    ...ScrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".explore__content .section__subheader", {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".explore__content .section__header", {
    ...ScrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".explore__content .section__description", {
    ...ScrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".explore__content .section__btn", {
    ...ScrollRevealOption,
    delay: 2000,
});
ScrollReveal().reveal(".explore__grid div", {
    duration:1000,
    delay: 2500,
    interval: 500,
});

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const clientCards = Array.from(document.querySelectorAll(".client__card"));

next.addEventListener("click", (e) => {
    for (let index = 0; index < clientCards.length; index++) {
       if (clientCards[index].classList.contains("active")) {
          const nextIndex = (index+1) % clientCards.length;
          clientCards[index].classList.remove("active")
          clientCards[nextIndex].classList.add("active");
          break;
       } 
     }
});

prev.addEventListener("click", (e) => {
    for (let index = 0; index < clientCards.length; index++) {
       if (clientCards[index].classList.contains("active")) {
          const prevIndex = (index ? index : clientCards.length) - 1;
          clientCards[index].classList.remove("active")
          clientCards[prevIndex].classList.add("active");
          break;
       } 
     }
});

ScrollReveal().reveal(".subscribe__container .section__header", {
    ...ScrollRevealOption,
});
ScrollReveal().reveal(".subscribe__container .section__description", {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".subscribe__container form", {
    ...ScrollRevealOption,
    delay: 1000,
});