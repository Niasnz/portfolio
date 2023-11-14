const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a')

// Swiper JS

let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev")

function createSwiper(container, pagination, nextButton, prevButton) {
  return new Swiper(container, {
    slidesPerView: handleWidth(),
    spaceBetween: 30,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
    },
});
}
// Fim Swiper JS

// Ajustar tamanho dos card de acordo com a largura da tela
function handleWidth() {
  let getWidth = window.innerWidth || document.documentElement.clientWidth
  let slideShow = 3;

  if (getWidth < 1001) {
    slideShow = 2
  }

  if (getWidth < 700) {
    slideShow = 1
  }

  return slideShow
}
// FIm ajuste card

// Ativa e desativa o menu hamburguer (dispositivos pequenos)
menuHamburguer.addEventListener('click', () => {
  nav.classList.toggle('active');
})
// Fim menu 

// Fechar menu quando clicar em algum item
links.forEach(item => {
  item.addEventListener('click', () =>{
    nav.classList.toggle('active')
  })
})
// Fim menu clicks

// Executar o ajustamento de cards e atualizar pagina
window.addEventListener('resize', () => {
  swiper.params.slidesPerView = handleWidth();
  swiper.update();
})

// Trocar fundo do header monitorando scroll
let header = document.getElementById('header')
  
window.addEventListener('scroll', () => {
if (window.scrollY >= 200){
header.style.background = '#191919'
} else {
header.style.background = 'transparent'
}
})