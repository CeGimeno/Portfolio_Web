"use strict"




let contador = 0


const carruselWrapper = document.querySelector (`.Carrusel-wrapper`)

//let moverCarrouselWrapper =() => {
//   carrouselWrapper.style.translate = `${-50 * contador}% 0%`
//}


let moverCarrouselWrapper =() => {
    carrouselWrapper.style.translate = `-50% 0%`
}

window.onscroll = () => {
    console.log(`Hola`)
}

window.addEventListener("scroll", () => {
    console.log(`Hola`)
})

// window.addEventListener

//Cuando window haga scroll, se activa la accion moverCarruselWrapper

// window.addEventListener("scroll", () => {
//     carruselWrapper.style.translate = `-50% 0%`
// })
