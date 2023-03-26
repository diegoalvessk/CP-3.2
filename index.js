let marca = document.getElementById("marca")
let modelo = document.getElementById("modelo")
let ano = document.getElementById("ano")
let valor = document.getElementById("valor")
let cor = document.getElementById("cor")
let automatico = document.getElementById("automatico")
let submit = document.getElementById("submit")
let carro = []
let index = 0

submit.addEventListener("click", cadastrarObjeto)
marca.addEventListener("change", event => {
    window.localStorage.setItem('marca', marca.value)
})

modelo.addEventListener("change", event => {
    window.localStorage.setItem('modelo', modelo.value)
})

ano.addEventListener("change", event => {
    window.localStorage.setItem('ano', ano.value)
})

valor.addEventListener("change", event => {
    window.localStorage.setItem('valor', valor.value)
})

cor.addEventListener("change", event => {
    window.localStorage.setItem('cor', cor.value)
})

automatico.addEventListener("change", event => {
    window.localStorage.setItem('automatico', automatico.value)
})

function cadastrarObjeto(){
    carro[index] = {
        marca: window.localStorage.getItem('marca'),
        modelo: window.localStorage.getItem('modelo'),
        ano: window.localStorage.getItem('ano'),
        valor: window.localStorage.getItem('valor'),
        cor: window.localStorage.getItem('cor'),
        automatico: window.localStorage.getItem('automatico'),
    }
    console.log(carro[index])
    index++
}

let recarragou

window.addEventListener("load", event => {
   console.log(window.localStorage.getItem('marca')
   + ", " +  window.localStorage.getItem('modelo')  + ", " + 
   window.localStorage.getItem('ano')   + ", " + 
   window.localStorage.getItem('valor') 
   + ", " +  window.localStorage.getItem('cor')   + ", " + 
   window.localStorage.getItem('automatico'))

})

function pesquisarMarca(){
    let nomeMarca = "gol"
    let resultadoPesquisa = []

    for (let index = 0; index < carro.length; index++) {
        if(carro[index].marca == nomeMarca){
            resultadoPesquisa.push(carro[index])
        }
    }
    
    console.log(resultadoPesquisa)
}

function marcasDisponiveis(){
    let marcasDisponiveis = []

    for (let index = 0; index < carro.length; index++) {
        if(carro.indexOf(carro[index].marca) == -1){
            marcasDisponiveis.push(carro[index])
        }
    }

    console.log(marcasDisponiveis)

}