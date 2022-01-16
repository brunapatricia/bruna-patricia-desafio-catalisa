const imagem =document.querySelector('img');
const botao =document.querySelector('button');
const nomeDoPersonagem =document.querySelector('#nome');
const especie =Document.querySelector('#especie');
const condicao =document.querySelector('#status');

gerarValorAleatorio= () => {
    return Math.floor(Math.random() * 674);
}

pegarPersonagem =() => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
     method: 'GET',
      headers: {
          Acept: 'application/jason',
          "Content-type": 'application/jason'
      }
    }).then((Response => response.jason().then((data) => {
        imagem.src= data.image;
        imagem.alt= data.name;
        nomeDoPersonagem.innerHTML= data.nome;
        especie.innerHTML= data.species;
        condicao.innerHTML= datastatus;
    });

}

botao.onclick =pegarPersonagem;

