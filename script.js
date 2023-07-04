var botao = document.querySelector('.botao')

var container = document.querySelector('.container')
var containerCarta = document.querySelector('.containerCarta')
var triangulo = document.querySelector('.triangulo')
var section = document.querySelector(".section")
var teamo = document.querySelector('.teamo')
var containerquiz = document.querySelector('.containerquiz')

var ordem = 0

function clicou() {  

    if(ordem == 0) {
        container.style.display="none"
        section.style.display="block"
        teamo.style.display="none"
        botao.innerHTML = "Abrir a Carta"
        ordem = 1
     }else if(ordem == 1) {
        section.style.animation="balancoanime 1s"
    
        setTimeout(sectionDisplay,1000)

        function sectionDisplay() {
            section.style.display="none"
            triangulo.style.display="none"
            botao.style.display="none"

            containerCarta.style.display="block"
        }
        
    }  
}

function pergunta() {
    containerCarta.style.display="none"
    containerquiz.style.display="block"
}

function clicouEu() {
    var eu = document.querySelector('.eu')
    var alturaAleatoria = Math.floor(Math.random() * 400)
    var larguraAleatoria = Math.floor(Math.random() * 250)

    eu.style.left=`${larguraAleatoria}px`
    eu.style.top=`${alturaAleatoria}px`
}
function clicouVinicius() {
    var containerNome = document.querySelector('.containerNome')
    containerNome.style.display="none"
    var nada = document.querySelector('.nada')

    nada.innerHTML = "<h3>Então você concorda comigo que eu sou o que mais ama, Obrigado Te amo!</h3>"
}