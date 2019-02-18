function lettersOnly(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
    ((evt.which) ? evt.which : 0));
  if (charCode > 31 && (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122)) {
    alert("Insira apenas letras.");
    return false;
  }
  return true;
}

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
      minuto--;
      segundo = 59;
    }
  }
  else {
    segundo--;
  }

  atualizarParagrafos(minuto, segundo);
}
// Função gera um número aleatório no no intervalo entre 0 e 2
let numAleatorio = function () {

  let min = 0;
  let max = 2;

  return Math.round(Math.random() * (max - min) + min);
}

// let pegaInput = function(){
//   let inputElement = document.getElementById('exemplo');
//   inputElement.addEventListener('change', function(e) {
//     jogadaDoUsuario = e.target.value; 
//   });
//   return jogadaDoUsuario; 
// }

// let jogadaDoUsuario = ' ';
// let botao = document.getElementById('botao');
// botao.addEventListener('click', pegaInput);




//alert("Escolha a categoria e acerte a palavra em três minutos e meio")


let catCarro = [
  palavra1 = { palavra: 'roda', dica1: 'movimento', dica2: 'quatro' },
  palavra2 = { palavra: 'retrovisor', dica1: 'espelho', dica2: 'segurança' },
  palavra3 = { palavra: 'parabrisa', dica1: 'insufilm', dica2: 'proteção' },
  palavra4 = { palavra: 'banco', dica1: 'passageiro', dica2: 'couro' },
  palavra5 = { palavra: 'escapamento', dica1: 'barulho', dica2: 'esportivo' }
];

let x = numAleatorio();

let a = catCarro[2].palavra; // salva o atributo 'palavra' do objeto 'palavra1' da lista 'catCarro' na variável 'a'. No jogo, 'catCarro' será a categoria escolhida pelo usuário. 'palavra2' virá dps que ele acertar a 1 e assim por diante.

let d1 = catCarro[x].dica1;
let d2 = catCarro[x].dica2;

let palavraDaRodada = a.split(''); // separa a variável 'a' em caracteres individuais e os coloca na lista 'c'
console.log(palavraDaRodada);

// Cria uma linha pontilhada do tamanho da palavra
let mascara = [];
for (let i = 0; i < palavraDaRodada.length; i++) {
  mascara = mascara + '_';
}
mascara = mascara.split('');
console.log(mascara);

const pMinutos = document.querySelector('.minutos');
const pSegundos = document.querySelector('.segundos');
const menuCategorias = document.querySelector('.menu-categorias');
const navMenuCategorias = document.querySelector('.nav-menu-categorias');
let interval;
interval = setInterval(atualizarTimer, 1000);
setTimeout(atualizarTimer, 1000);
menuCategorias.onclick = atualizarMenu;

let gameLoop = true;
let jogadaDoUsuario = '';
let letrasRestantes = palavraDaRodada;
while (gameLoop == true) {
  while (jogadaDoUsuario == '') {
    jogadaDoUsuario = prompt("Faça sua jogada");
  }
    for (let i = 0; i < palavraDaRodada.length; i++) {
      if (palavraDaRodada[i] == jogadaDoUsuario) {
        mascara[i] = jogadaDoUsuario;
        letrasRestantes.splice(i, 1);
      }  
    }
    if (letrasRestantes.length == 0) {  
      gameLoop = false;    
    }
    console.log(mascara);
    jogadaDoUsuario = '';
}
