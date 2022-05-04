// Função de habilitar meenu.
function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll') //Add Scroll na class
  } else {
    navigation.classList.remove('scroll') //Remove Scroll da class
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
