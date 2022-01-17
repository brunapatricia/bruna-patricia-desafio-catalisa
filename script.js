const imagem =document.querySelector('#imagem');
const botao =document.querySelector('button');
const nomeDoPersonagem =document.querySelector('#nome');
const especie =Document.querySelector('#especie');
const condicao =document.querySelector('#status');


const imagem2 =document.querySelector('imagem2');
const nomeDoPersonagem2 =document.querySelector('#nome2');
const especie2 =Document.querySelector('#especie2');
const condicao2 =document.querySelector('#status2');

const imagem3 =document.querySelector('#imagem3');
const nomeDoPersonagem3 =document.querySelector('#nome3');
const especie3 =Document.querySelector('#especie3');
const condicao3 =document.querySelector('#status3');

trsduzirCondicao = (data) => {
    if (data.status == 'unknown') {
        return 'Não sabemos'; 
    } else if (data.status == 'Alive') {
        return 'Sim';      
    } else {
        return 'Não. Está morto';
    }
}

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
        condicao.innerHTML=  traduzirCondicao(data);
        
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
        condicao.innerHTML=  traduzirCondicao(data);
        
        let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
     method: 'GET',
      headers: {
          Acept: 'application/json',
          "Content-type": 'application/json'
      }
    }).then((Response => response.jason()).then((data) => {
        imagem.src= data.image;
        imagem3.alt= data.name;
        nomeDoPersonagem3.innerHTML= data.nome;
        especie3.innerHTML= data.species;
        condicao.innerHTML=  traduzirCondicao(data);

botao.onclick =pegarPersonagem;
    }
