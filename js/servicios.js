"use strict"

const servicios = document.querySelectorAll(`.Servicios`)
const imagenes = document.querySelectorAll(`.Servicios-columna--img`)

//Cuando hago click en servicios, el imagenes d emismo i se le añade active

servicios.forEach((_,i)=>{
        servicios[i].addEventListener(`mouseover`, ()=>{
            imagenes.forEach((_,j)=>{
                imagenes[j].classList.remove(`isActive`)
        })
        imagenes[i].classList.add(`isActive`)
    })
})

// Cuando hago CLICK en CUALQUIER .button5,
    // TODOS .item5 se le REMOVE la clase 'active'
    // .item5 con MISMO INDEX se le ADD la clase 'active'

//     const buttons5 = document.querySelectorAll(`.button5`)
//     const items5 = document.querySelectorAll (`.item5`)

//     buttons5.forEach((_,i)=>{
//         buttons5[i].addEventListener(`click`, ()=>{
//             items5.forEach((_,j)=>{
//                 items5[j].classList.remove(`active`)
//         })
//         items5[i].classList.add(`active`)
//     })
// })