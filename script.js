alert("Escolha a categoria e acerte a palavra em três minutos e meio")

const pMinutos = document.querySelector('.minutos');
const pSegundos = document.querySelector('.segundos');
const menuCategorias = document.querySelector('.menu-categorias');
const navMenuCategorias = document.querySelector('.nav-menu-categorias');
let interval;


let catCarro = [
  palavra1 = { palavra: 'chave de roda', dica1: 'ferramenta', dica2: 'pneu' },
  palavra2 = { palavra: 'retrovisor', dica1: 'espelho', dica2: 'segurança' },
  palavra3 = { palavra: 'parabrisa', dica1: 'insufilm', dica2: 'proteção' }
];

let catLugaresFamosos = [
  palavra1 = { palavra: 'roma', dica1: 'conquista', dica2: 'julio' },
  palavra2 = { palavra: 'triângulo das bermudas', dica1: 'ilhas', dica2: 'desaparecimentos' },
  palavra3 = { palavra: 'grécia', dica1: 'deuses', dica2: 'crise econômica' }
];

let catAnimais = [
  palavra1 = { palavra: 'cachorro', dica1: 'amigo', dica2: 'coleira' },
  palavra2 = { palavra: 'beija-flor', dica1: 'nectar', dica2: 'voa' },
  palavra3 = { palavra: 'baleia-azul', dica1: 'gigante', dica2: 'krillo' }
];

// Função gera um número aleatório no no intervalo entre 0 e 2
let numAleatorio = function(){
  
  let min = 0;
  let max = 2;
  
  return  Math.round(Math.random() * (max - min) + min);
}

x = numAleatorio();

let a = catCarro[x].palavra; // salva o atributo 'palavra' do objeto 'palavra1' da lista 'catCarro' na variável 'a'. No jogo, 'catCarro' será a categoria escolhida pelo usuário. 'palavra2' virá dps que ele acertar a 1 e assim por diante.


let c = a.split(""); // separa a variável 'a' em caracteres individuais e os coloca na lista 'c'
console.log(c);

let jogadaDoUsuario = 'a'; // "letra que o usuário jogou"

let d1 = catCarro[x].dica1;
let d2 = catCarro[x].dica2;

// Cria uma linha pontilhada do tamanho da palavra
let linha = [];
for(let valor of a){
    linha = linha + '_ ';
}
console.log(linha);

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

function lettersOnly(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
  ((evt.which) ? evt.which : 0));
  if (charCode > 31 && (charCode < 65 || charCode > 90) &&
  (charCode < 97 || charCode > 122)) {
    alert("Enter letters only.");
    return false;
  }
  return true;
}
menuCategorias.onclick = atualizarMenu;