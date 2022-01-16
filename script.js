const imagem =document.querySelector('img');
const botao =document.querySelector('button');
const nomeDoPersonagem =document.querySelector('#nome');
const especie =Document.querySelector('#especie');
const condicao =document.querySelector('#status');


const imagem2 =document.querySelector('img');
const botao =document.querySelector('button');
const nomeDoPersonagem2 =document.querySelector('#nome');
const especie2 =Document.querySelector('#especie');
const condicao2 =document.querySelector('#status');

const imagem3 =document.querySelector('img');
const botao =document.querySelector('button');
const nomeDoPersonagem3 =document.querySelector('#nome');
const especie3 =Document.querySelector('#especie');
const condicao3 =document.querySelector('#status');



gerarValorAleatorio= () => {
    return Math.floor(Math.random() * 674);
}

pegarPersonagem =() => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
     method: 'GET',
      headers: {
          Acept: 'application/json',
          "Content-type": 'application/json'
      }
    }).then((Response => response.jason().then((data) => {
        imagem.src= data.image;
        imagem.alt= data.name;
        nomeDoPersonagem.innerHTML= data.nome;
        especie.innerHTML= data.species;
        condicao.innerHTML= datastatus;
    )};
    


    pegarPersonagem =() => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
     method: 'GET',
      headers: {
          Acept: 'application/json',
          "Content-type": 'application/json'
      } 
     }).then((Response => response.jason().then((data) => {
        imagem2.src= data.image;
        imagem.alt= data.name;
        nomeDoPersonagem2.innerHTML= data.nome;
        especie2.innerHTML= data.species;
        condicao2.innerHTML= datastatus;
        )}

        
        pegarPersonagem =() => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
     method: 'GET',
      headers: {
          Acept: 'application/json',
          "Content-type": 'application/json'
      }
    }).then((Response => response.jason().then((data) => {
        imagem.src= data.image;
        imagem3.alt= data.name;
        nomeDoPersonagem3.innerHTML= data.nome;
        especie3.innerHTML= data.species;
        condicao3.innerHTML= datastatus;
    });

}

botao.onclick =pegarPersonagem;

