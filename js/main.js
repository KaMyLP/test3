document.addEventListener('DOMContentLoaded', function() {

    const nav = document.querySelector('.navbar')
    const allNavLinks = document.querySelectorAll('.nav-link')
    const navMobile = document.querySelector('.navbar-collapse')

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add(`shadow-bg`)
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    // allNavLinks.forEach(link => link.addEventListener('click', () => navMobile.classList.remove('show')))

    // window.addEventListener('scroll', addShadow)
    Object.values(allNavLinks).map(link => link.addEventListener('click', () => navMobile.classList.remove('show')))
    window.addEventListener('scroll', addShadow)
})