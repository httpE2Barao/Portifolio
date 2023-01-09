function menuShow () {
    let menuMobile = document.querySelector('.mobile-opções')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
    let menuMobileIcon = document.querySelector('.menu-icon')
    if (menuMobileIcon.classList.contains('aberto')) {
        menuMobileIcon.classList.remove('aberto')
    } else {
        menuMobileIcon.classList.add('aberto')
    }
}

function click () {
    document.querySelector('main2').addEventListener("click", rolar);
    document.querySelector('main3').addEventListener("click", rolar);
}
function rolar () {
    
}