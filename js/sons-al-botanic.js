"use strict"

// Intenté lo del carrusel en horizontal que te contaba en el correo. Lo he dejado así, pero borré y reescribí muchas cosa,s ya no se porque se quedó así.


let contador = 0


const carruselWrapper = document.querySelector (`.Carrusel-wrapper`)

let moverCarrouselWrapper =() => {
    carrouselWrapper.style.translate = `${-50 * contador}% 0%`
}

window.onscroll = () => {
    console.log(`Hola`)
}

window.addEventListener("scroll", () => {
    console.log(`Hola`)
})

// window.addEventListener