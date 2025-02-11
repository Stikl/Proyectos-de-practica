document.addEventListener('DOMContentLoaded', function() {

    const botonesContrato = document.querySelectorAll('button.c1, button.c2, button.c3');

    const divsContrato = document.querySelectorAll('div.c1, div.c2, div.c3');

    const botonesNone = document.querySelectorAll('button#none');
  

    botonesContrato.forEach(boton => {
      boton.addEventListener('click', () => {

        const claseBoton = boton.classList[0];

        divsContrato.forEach(div => div.hidden = true);

        document.querySelector(`div.${claseBoton}`).hidden = false;
      });
    });
  

    botonesNone.forEach(boton => {
      boton.addEventListener('click', () => {

        const divPadre = boton.parentNode;

        divPadre.hidden = true;
      });
    });
});

