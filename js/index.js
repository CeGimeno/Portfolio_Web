"use strict"

//CODIGO DE JAVA PARA EL INEX EN PORTADA
// Cuando paso el ratón por portada-img--taza, se le añade "ISActive" a portada-aside--taza
// Cuando paso el ratón por portada-img--ordenador, se le añade "ISActive" a portada-aside--ordenador

//Seleccionamos las dos imagenes de la sección Portada de html
const imagenTaza = document.querySelector(`.Objeto-img--taza`)
const textoTaza = document.querySelector(`.Objeto-aside--taza`)

//Seleccionamos las dos divs con texto que son etiquetas contiguas de las imágenes
const imagenOrdenador = document.querySelector(`.Objeto-img--ordenador`)
const textoOrdenador = document.querySelector(`.Objeto-aside--ordenador`)



imagenTaza.addEventListener(`mouseover`, () => {
    //Al poner el ratón encima de imagen
    textoTaza.classList.add(`isActive`)
}
)

imagenTaza.addEventListener(`mouseout`, () => {
    //Cuando el ratón sale de la imagen
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

