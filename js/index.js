"use strict"

// Cuando paso el ratón por portada-img--taza, se le añade "ISActive" a portada-aside--taza
// Creo que esto que he hecho sería más fácil con dos querySelectorAll y hacer que cuando paso el ratón por una imagen el texto del mismo índice se active

const imagenTaza = document.querySelector(`.Portada-img--taza`)
const textoTaza = document.querySelector(`.Portada-aside--taza`)

const imagenOrdenador = document.querySelector(`.Portada-img--ordenador`)
const textoOrdenador = document.querySelector(`.Portada-aside--ordenador`)

const imagenBoli = document.querySelector(`.Portada-img--boli`)
const textoBoli = document.querySelector(`.Portada-aside--boli`)

const imagenRaton = document.querySelector(`.Portada-img--raton`)
const textoRaton = document.querySelector(`.Portada-aside--raton`)



imagenTaza.addEventListener(`mouseover`, () => {
    textoTaza.classList.add(`isActive`)
}
)

imagenTaza.addEventListener(`mouseout`, () => {
    textoTaza.classList.remove(`isActive`)
}
)

imagenOrdenador.addEventListener(`mouseover`, () => {
    textoOrdenador.classList.add(`isActive`)
}
)

imagenOrdenador.addEventListener(`mouseout`, () => {
    textoOrdenador.classList.remove(`isActive`)
}
)

