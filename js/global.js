"use strict"

// Cabecera

class Cabecera extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
<header class="Cabecera">
  <nav class="Cabecera-nav">
    <ul class="Cabecera-ul"> 
      <li class="Cabecera-li"><a href="index.html" class="Cabecera-a--inicio">Inicio</a></li>
      <li class="Cabecera-li"><a href="trabajos.html" class="Cabecera-a--trabajos">Trabajos</a></li>
      <li class="Cabecera-li"><a href="servicios.html" class="Cabecera-a--servicios">Servicios</a></li>
      <li class="Cabecera-li"><a href="sobre-mi.html" class="Cabecera-a--sobremi">Sobre mí</a></li>
      <li class="Cabecera-li"> <a href="contacto.html" class="Cabecera-a--contacto">Contacto</a></li>
    </ul>
  </nav>  
  <button class="Cabecera-button">
   <span class="Cabecera-menu isVisible"> Menu</span>
    <span class="Cabecera-cerrar">Cerrar</span></button>
  <div class="Desplegable">
  <nav class="Desplegable-nav">
    <ul class="Desplegable-ul">
      <li class="Desplegable-li"><a href="trabajos.html" class="Desplegable-a" class="Desplegable-a--trabajos">Trabajos</a></li>
      <li class="Desplegable-li"><a href="servicios.html" class="Desplegable-a" class="Desplegable-a--servicios">Servicios</a></li>
      <li class="Desplegable-li"><a href="sobre-mi.html" class="Desplegable-a" class="Desplegable-a--sobremi">Sobre mí</a></li>
      <li class="Desplegable-li"><a href="contacto.html" class="Desplegable-a" class="Desplegable-a--contacto">Contacto</a></li>
    </ul>
  </nav>
</div>
</header>`
    }
}

customElements.define( 'element-cabecera' , Cabecera )


// MENU DESPLEGABLE DLE MOVIL

const cabeceraMenu = document.querySelector(`.Cabecera-menu`)
const cabeceraCerrar = document.querySelector(`.Cabecera-cerrar`)
const desplegable = document.querySelector(`.Desplegable`)

// Al hacer click en cabeceraMenum desplegable se vuelve isVisible,
//cabacera.menu remove is Visible y cabaceraCerrar is visible

cabeceraMenu.addEventListener(`click` , () => {
    desplegable.classList.add(`isVisible`)
    cabeceraMenu.classList.remove(`isVisible`)
    cabeceraCerrar.classList.add(`isVisible`)
})

// Al hacer click en cerrarMenu desplegable se quita isVisible,
//cabaceraCerrar remove is Visible y cabaceraMenu is visible

cabeceraCerrar.addEventListener(`click`, () => {
    desplegable.classList.remove(`isVisible`)
    cabeceraCerrar.classList.remove(`isVisible`)
    cabeceraMenu.classList.add(`isVisible`)
    })

// Submenu a la derecha de las páginas individuales de los trabajos

class Menu extends HTMLElement{
    connectedCallback(){
        this.innerHTML =` <div class="Menu">
        <div class="Menu-link"><a href="la-cirera.html" class="Menu-a"></a>La Cirera</div>
        <div class="Menu-link"><a href="esporas-en-la-lengua.html" class="Menu-a">esporas en la lengua</a></div>
        <div class="Menu-link"><a href="sons-al-botanic.html" class="Menu-a">Sons al Botànic</a></div>
        <div class="Menu-link"><a href="esporas-en-la-lengua.html" class="Menu-a">esporas en la lengua</a></div>
        <div class="Menu-link">Trabajo5</div>
    </div>`
    }
  }

  customElements.define( 'element-menu' , Menu )

  //POP UP DE LA PÁGINA SOBRE MI

  const imagenSobremi = document.querySelector(`#imagenSobremi`)
  const popupSobremi = document.querySelector(`#popupSobremi`)

  //al pasar el raton sobre imagenSobremi, popupSobremi es visible
  imagenSobremi.addEventListener(`mouseover`, () => {
    popupSobremi.classList.add(`isActive`)
}
)

imagenSobremi.addEventListener(`mouseout`, () => {
    popupSobremi.classList.remove(`isActive`)
}
)