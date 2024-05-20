const entrada_cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = '4b799fcc4e3284f2c12cb576d9c7d50f'
const imagem = document.querySelector('#imagem')

botao.addEventListener('click',buscacidade)

async function buscacidade (){

    cidade = entrada_cidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta=>resposta.json())

    console.log(dados)

    nome_cidade.textContent = `Tempo em ${dados.name}`
    temperatura.textContent = `${dados.main.temp.toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
    imagem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
