const pMinutos = document.querySelector('.minutos');
const pSegundos = document.querySelector('.segundos');
const menuCategorias = document.querySelector('.menu-categorias');
const navMenuCategorias = document.querySelector('.nav-menu-categorias');
let interval;

const atualizarMenu = function () {
  menuCategorias.classList.toggle('ativo');
  navMenuCategorias.classList.toggle('visivel');
}

const atualizarParagrafos = function (minutos, segundos) {
  pMinutos.innerHTML = minutos;
  pSegundos.innerHTML = segundos;
}

const atualizarTimer = function () {
  let minuto = Number(pMinutos.innerHTML);
  let segundo = Number(pSegundos.innerHTML);

  if (segundo === 0) {
    if (minuto === 0) {
      clearInterval(interval);
      // clearTimeout(valor)
    }
    else {
      minuto --;
      segundo = 59;
    }
  }
  else {
    segundo --;
  }

  atualizarParagrafos(minuto, segundo);
}

interval = setInterval(atualizarTimer, 1000);
// setTimeout(atualizarTimer, 1000);

// function lettersOnly(evt) {
//   evt = (evt) ? evt : event;
//   var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
//   ((evt.which) ? evt.which : 0));
//   if (charCode > 31 && (charCode < 65 || charCode > 90) &&
//   (charCode < 97 || charCode > 122)) {
//     alert("Enter letters only.");
//     return false;
//   }
//   return true;
// }
menuCategorias.onclick = atualizarMenu;