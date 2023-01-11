function menuShow () {
    let menuMobile = document.querySelector('.primeiromenu')
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
function segundomenuShow () {
    let menuMobile = document.querySelector('.segundomenu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
    let menuMobileIcon = document.querySelector('.segundoicon')
    if (menuMobileIcon.classList.contains('aberto')) {
        menuMobileIcon.classList.remove('aberto')
    } else {
        menuMobileIcon.classList.add('aberto')
    }
}
