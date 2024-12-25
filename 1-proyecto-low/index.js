

function menu(contenedorMenu, listaMenu) {
    let d = document

    d.addEventListener('click', (e)=>{
        if(e.target.matches(contenedorMenu) || e.target.matches(`${contenedorMenu} *`)){
            d.querySelector(listaMenu).classList.toggle('active')
        }
    })
}

menu('.iconos-mobile', '.nav-list')