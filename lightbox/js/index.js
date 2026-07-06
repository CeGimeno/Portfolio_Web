"use strict"

const imagen = document.querySelector(`.Imagen-img`)
const lightbox = document.querySelector(`.Lightbox`)
const boton = document.querySelector(`.Lightbox-button`)

imagen.addEventListener(`click` , () =>{
    lightbox.classList.add(`isActive`)
})

boton.addEventListener(`click` , () =>{
    lightbox.classList.remove(`isActive`)
})
