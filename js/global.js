"use strict"

// Cabecera para añadir en el HTML

class Cabecera extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
  <button class="Cabecera-button" tittle="Boton menu">
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

customElements.define('element-cabecera', Cabecera)


// INTERACCIÓN MENU DESPLEGABLE DEL MOVIL

const cabeceraMenu = document.querySelector(`.Cabecera-menu`)
const cabeceraCerrar = document.querySelector(`.Cabecera-cerrar`)
const desplegable = document.querySelector(`.Desplegable`)

// Al hacer click en cabeceraMenum desplegable se vuelve isVisible,
//cabacera.menu remove is Visible y cabaceraCerrar is visible

cabeceraMenu.addEventListener(`click`, () => {
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

// Submenu a la derecha de las páginas individuales de los trabajos para añadir en el HTML

class Menu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <div class="Menu">
        <div class="Menu-link"><a href="la-cirera.html" class="Menu-a">La Cirera</a></div>
        <div class="Menu-link"><a href="esporas-en-la-lengua.html" class="Menu-a">esporas en la lengua</a></div>
        <div class="Menu-link"><a href="sons-al-botanic.html" class="Menu-a">Sons al Botànic</a></div>
        <div class="Menu-link"><a href="de-marti.html" class="Menu-a">Puñales de Martín</a></div>
        <div class="Menu-link"><a href="Traca.html" class="Menu-a">TRACA</a></div>
        <div class="Menu-link"><a href="ramon-perales.html" class="Menu-a">Ramonkey Perales</a></div>
        <div class="Menu-link"><a href="carmen-casas.html" class="Menu-a">Carmen Casas</a></div>
    </div>`
  }
}

customElements.define('element-menu', Menu)

//POP UP DE LA PÁGINA SOBRE MI
//Selecciono la imagen de Contacto y edl vi contiguo

const imagenSobremi = document.querySelector(`#imagenSobremi`)
const popupSobremi = document.querySelector(`#popupSobremi`)

//que solo pase ne la página de "sobre mi" y así el Java no de error en el resto de páginas
// si existe imagenSobremi y popupSobremi que se active el código

if (imagenSobremi && popupSobremi) {

//al pasar el raton sobre imagenSobremi, popupSobremi es visible
imagenSobremi.addEventListener(`mouseover`, () => {
  popupSobremi.classList.add(`isActive`)
}
)

//cuando el ratón se va de la imagen, se le quita la clase is active
imagenSobremi.addEventListener(`mouseout`, () => {
  popupSobremi.classList.remove(`isActive`)
}
)
}

//Efecto acordeón para las preguntas frecuentes
const buttons = document.querySelectorAll(`.Acordeon-button`)
const parrafos =document.querySelectorAll(`.Acordeon-p`)
//Cuando se haga click sobre un boton, el parrafo de ese mismo índice se actova
//Cuando se active un parrafo, se desactivas los demas

if (buttons && parrafos){
  buttons.forEach((_,i) =>{
    buttons[i].addEventListener(`click`, () => {
            parrafos.forEach((_,j)=> {
                parrafos[j].classList.remove(`isActive`)
            })
            parrafos[i].classList.add(`isActive`)

            
    })
})
}

//Footer para añadir al pie de todas las páginas

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="Footer">
        <div class="Footer-columna Columna-izquierda">
            <aside class="Footer-aside">Carmen Gimeno - diseño gráfico & web</aside>
        </div>
        <div class="Footer-columna Columna-derecha">
            <nav class="Footer-nav">
                <ul class="Footer-ul">
                    <li class="Footer-li">
                        <a href="" class="Footer-a">Instagram</a>
                    </li>
                    <li class="Footer-li">
                        <a href="" class="Footer-a">Tiktok</a>
                    </li>
                    <li class="Footer-li">
                        <a href="" class="Footer-a">Email</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>`
  }
}

customElements.define('element-footer', Footer)