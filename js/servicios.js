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

//En tamaño movil, cuando el scroll pasa por un elemento de servicios, aparece l aimagen relacionada a ese texto
//

if (window.matchMedia('(max-width: 700px)').matches){

    const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {

      // Quitar active de todos
      enlaces.forEach(enlace => {
        enlace.classList.remove('active');
      });

      // Buscar el enlace correspondiente
      const enlaceActivo = document.querySelector(
        `.menu a[href="#${entry.target.id}"]`
      );

      // Activarlo
      if (enlaceActivo) {
        enlaceActivo.classList.add('active');
      }
    }
  });
}, {
  threshold: 0.5
});
}