"use strict"

// Cuando paso el ratón por portada-img--taza, se le añade "ISActive" a portada-aside--taza
// Creo que esto que he hecho sería más fácil con dos querySelectorAll y hacer que cuando paso el ratón por una imagen el texto del mismo índice se active

const imagenTaza = document.querySelector(`.Objeto-img--taza`)
const textoTaza = document.querySelector(`.Objeto-aside--taza`)

const imagenOrdenador = document.querySelector(`.Objeto-img--ordenador`)
const textoOrdenador = document.querySelector(`.Objeto-aside--ordenador`)




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

