"use strict"

const servicios = document.querySelectorAll(`.Servicios`)
const imagenes = document.querySelectorAll(`.Servicios-columna--img`)

//Cuando hago click en servicios, la imagen asociada a cada uno de los textos se vuelve visible

servicios.forEach((_,i)=>{
        servicios[i].addEventListener(`mouseover`, ()=>{
            imagenes.forEach((_,j)=>{
                imagenes[j].classList.remove(`isActive`)
        })
        imagenes[i].classList.add(`isActive`)
    })
})
