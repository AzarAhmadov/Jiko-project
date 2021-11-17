
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          140: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }
      });


const openLink = document.querySelector('.open-link');
const openList = document.querySelector('.list_two')

openLink.addEventListener('click', () => {
openList.classList.toggle('active')
})


let openBar = document.querySelector('.open-menu');
let navLIST = document.querySelector('.navLIST')
openBar.addEventListener('click', () => {
  navLIST.classList.toggle('active')
})

