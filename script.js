const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('especie');
const condicao = document.querySelector('#status');

traduzirCondicao = (data) => {
    if(data.status == 'unknown') {
        return 'Não sabemos';        
    }else if (data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAletorio();
    let numeroAleatorio2 = gerarValorAletorio();
    let numeroAleatorio3 = gerarValorAletorio();

    let ldiv =  document.getElementById("personagens");
    ldiv.innerHTML ='';   
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}, 
    ${numeroAleatorio2}, ${numeroAleatorio3}`)        
    .then((response) => response.json())
        .then((data) => {
            data.forEach(obj => {            
                var div = document.createElement('div')
                div.classList.add('single-character')
                div.innerHTML = `<img src=${obj.image} alt=${obj.name} />
                <h3>Nome: ${obj.name}</h3>
                <h3>Espécie: ${obj.species}</h3>
                <h3>Está vivo? ${traduzirCondicao(obj)}</h3>`
                document.getElementById('personagens').append(div)
           
            });
        });
    }   

botao.onclick = pegarPersonagem;