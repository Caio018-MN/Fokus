const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco")
const curtoBt = document.querySelector(".app__card-button--curto")
const longoBt = document.querySelector(".app__card-button--longo")
const banner = document.querySelector(".app__image")
const titulo = document.querySelector(".app__title")

focoBt.addEventListener("click", () => {
    alternarContexto('foco')
})

curtoBt.addEventListener("click", () => {
    alternarContexto('descanso-curto')
})

longoBt.addEventListener("click", () => {
    alternarContexto('descanso-longo')
})

function alternarContexto(contexto) {
    html.setAttribute("data-contexto", contexto)
    banner.setAttribute("src", `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = ` 
            Otimize sua produtividade ,<br>
                <strong class="app__title-strong"> mergulhe no que importa. </strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Otimize sua produtividade, <br>
                <strong class= "app__title-strong"> Faça uma pausa curta. </strong>
            `
            break; 1
        case "descanso-longo":
            titulo.innerHTML = `
                Hora de voltar a superficie, <br>
                    <strong class= "app__title-strong"> Faça uma pausa longa . </strong>
            `
            break;
        default:
            break;
    }     
}