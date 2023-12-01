'use strict';

async function pegarImagens() {
    const endPoint = 'https://api.gameofthronesquotes.xyz/v1/characters';
    const response = await fetch(endPoint);
    const imagens = await response.json();
    return imagens;
}

function criarTagImg(imagem) {

    const personagens = document.getElementById('personagens');
    const tagH2 = document.createElement('h2');
    tagH2.textContent = imagem.name;

    tagH2.addEventListener('click', function () {

        let frases = document.getElementById('info_personagem');
        frases.innerHTML = ''; // Limpa o conteúdo antes de adicionar novas frases

        let frasesSelecionadas = [];

        for (let i = 0; i < imagem.quotes.length; i++) {
            let paragrafo = document.createElement('p');
            paragrafo.textContent = imagem.quotes[i];
            frasesSelecionadas.push(paragrafo);
        }

        // Adiciona os parágrafos ao elemento 'frases'
        frasesSelecionadas.forEach(function (paragrafo) {
            frases.appendChild(paragrafo);
        });

        console.log(tagH2);
    });

    personagens.appendChild(tagH2);
}

async function carregarFotos() {
    const imagens = await pegarImagens();
    if (imagens !== undefined) {
        imagens.forEach(criarTagImg);
    } else {
        console.log('ERRRRROOOOO');
    }
}

carregarFotos();
