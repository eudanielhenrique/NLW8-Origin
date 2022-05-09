window.addEventListener('scroll', onScroll)

// Função de habilitar meenu.
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

// Função de habilitar meenu.
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll') //Add Scroll na class
  } else {
    navigation.classList.remove('scroll') //Remove Scroll da class
  }
}

//Mostra botão de voltar ao topo
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show') //Add show na class
  } else {
    backToTopButton.classList.remove('show') //Remove show da class
  }
}

//Função abrir menu
function openMenu() {
  document.body.classList.add('menu-expanded')
}

//Função fecha menu menu
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

//Função ScrollReveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
