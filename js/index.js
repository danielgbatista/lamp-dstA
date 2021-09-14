"use strict" /* validação para erros de códigos */

const lampada = document.getElementById('lampada')
let idIntervel

function lampadaDesligada() {
    return lampada.src.includes("desligada")
}

function trocarImagem() {
    if (lampadaDesligada()) {
        ligarLampada()
    }else{
        desligarLampada()
    }
}

function pararPiscar() {
    clearInterval(idIntervel)
}

function piscarLampada() {

    const piscar = document.getElementById('piscar')
    if (piscar.textContent == "Piscar") {
        idIntervel = setInterval( trocarImagem, 80)
        piscar.textContent = "Parar"
    }else{
        pararPiscar()
        piscar.textContent = "Piscar"
    }
}

function lampadaInteira() {
    return lampada.src.includes("ligada")
}

function ligarLampada() {
    if(lampadaInteira()){
        lampada.src = "img/ligada.jpg"
    }
}

function desligarLampada() {
    if (lampadaInteira()) {
        lampada.src = "img/desligada.jpg"   
    }
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
}

//eventos
document.getElementById('lampada')
.addEventListener("mouseover", ligarLampada)

document.getElementById('lampada')
.addEventListener("mouseout", desligarLampada)

document.getElementById('lampada')
.addEventListener("dblclick", quebrarLampada)

document.getElementById('piscar')
.addEventListener("click", piscarLampada)

document.getElementById('ligar')
.addEventListener("click", ligarLampada)

document.getElementById('desligar')
.addEventListener("click", desligarLampada)