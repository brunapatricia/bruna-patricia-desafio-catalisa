const imagem =document.querySelector('img');
const botao =document.querySelector('button');
const nomeDoPersonagem =document.querySelector('#nome');
const especie =Document.querySelector('#especie');
const status =document.querySelector('#status');


pegarPersonagem =() => {
    return fetch(`https://rickandmortyapi.com/api/character/1,2,3`,{
     method: 'GET',
      headers: {
          Acept: 'application/jason',
          "Content-type": 'application/jason'
      }
    }).then((Response => response.jason().then((data) => {
        imagem.src= data.image;
        imagem.alt= data.name;
        nomeDoPersonagem.innerHTML= data.nome;
    });

}

botao.onclick =pegarPersonagem;

