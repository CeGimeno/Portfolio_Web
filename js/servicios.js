"use strict"

//selecciono cada texto de .Servicos y cada imagen como un array

const servicios = document.querySelectorAll(`.Servicios`)
const imagenes = document.querySelectorAll(`.Servicios-columna--img`)

//Cuando hago click en servicios, la imagen asociada a cada uno de los textos se vuelve visible

servicios.forEach((_,i)=>{
        servicios[i].addEventListener(`mouseover`, ()=>{
            //Al pasar el ratón por encima de uno de los textos de servicios
            imagenes.forEach((_,j)=>{
                imagenes[j].classList.remove(`isActive`)
                //Solo puede haber una imagen "Activa" a la vez
        })
        imagenes[i].classList.add(`isActive`)
    })
})
