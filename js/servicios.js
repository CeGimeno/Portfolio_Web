"use strict"

//selecciono cada texto de .Servicos y cada imagen como un array

const servicios = document.querySelectorAll(`.Servicios`)
const imagenes = document.querySelectorAll(`.Servicios-columna--img`)

//Mismo breakpoint que en css/servicios.css, donde .Servicios pasa a layout apilado (móvil). 
//Todo lo relacionado con el tamaño móvil en este archivo JavaScript ha sido pedido a la IA

const mobileQuery = window.matchMedia(`(max-width: 800px)`)

//Cuando hago click en servicios, la imagen asociada a cada uno de los textos se vuelve visible

servicios.forEach((_,i)=>{
        servicios[i].addEventListener(`mouseover`, ()=>{
            //En móvil la activación va por scroll, no por hover
            if(mobileQuery.matches) return
            //Al pasar el ratón por encima de uno de los textos de servicios
            imagenes.forEach((_,j)=>{
                imagenes[j].classList.remove(`isActive`)
                //Solo puede haber una imagen "Activa" a la vez
        })
        imagenes[i].classList.add(`isActive`)
    })
})

//En tamaño movil, cuando el scroll pasa por un elemento de servicios, aparece la imagen relacionada a ese texto. CÓDIGO SOLICITADO A LA IA

const serviciosObserver = new IntersectionObserver((entries)=>{
    //En escritorio la activación va por hover, no por scroll
    if(!mobileQuery.matches) return

    entries.forEach((entry)=>{
        //Solo actúo cuando el bloque de servicios cruza el centro de la pantalla
        if(!entry.isIntersecting) return

        const i = Array.from(servicios).indexOf(entry.target)

        servicios.forEach((_,j)=>{
            servicios[j].classList.remove(`isActive`)
            //Solo puede haber un elemento Servicios "Activo" a la vez
        })
        servicios[i].classList.add(`isActive`)

        imagenes.forEach((_,j)=>{
            imagenes[j].classList.remove(`isActive`)
            //Solo puede haber una imagen "Activa" a la vez
        })
        imagenes[i].classList.add(`isActive`)
    
    })
}, {
    root: null,
    rootMargin: `-30% 0px -50% 0px`,
    //La linea de activación es el centro vertical de la pantalla
    threshold: 0
})

servicios.forEach((servicio)=>{
    serviciosObserver.observe(servicio)
})

