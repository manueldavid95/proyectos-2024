const iconos = document.querySelector('.iconos')
const nav = document.querySelector('.nav')

iconos.addEventListener('click', ()=> {
    nav.classList.toggle('active')
})

document.addEventListener('click', (e)=> {
    if(e.target.matches('.list-link')) {
        nav.classList.remove('active')
    }
})