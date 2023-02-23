// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

// import data from './data/rickandmorty/rickandmorty.js';


const pokemons = data.pokemon;

function mostrarPokemon(data) {
  const mostrarPokemonTela = document.getElementById("inserirCards");
  mostrarPokemonTela.innerHTML = data.map((item) =>
    `
    <div class = "cards-container">
   <div class= "cards-container-frente">
      <h2 class = "nome-pokemons">${item.name}</h2>
      <img class ="img-estilo" src=${item.img}>
      <p class = "tipos-pokemons"> ${item.type.join(" ")}</p>                   
    </div>
 </div>
 `
  ).join("")

}
mostrarPokemon(pokemons)

// Pegar o botão
const meuBotao = document.getElementById("myBtn");

// Quando usuário desce 20px do topo do documento, mostraro botão
window.onscroll = function() {scrollFuncao()};

function scrollFuncao() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    meuBotao.style.display = "block";
  } else {
    meuBotao.style.display = "none";
  }
}

// Quando o usuário clica no botao, rola para o topo do documento

function topFuncao() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
}
