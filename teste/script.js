let palavrasPossiveis = [
    'citar'
];
let randomizacaoPalavra = Math.floor(Math.random()*palavrasPossiveis.length);
let palavraRandom = palavrasPossiveis[randomizacaoPalavra];
let palavraRandomArray = palavraRandom.split('')
let linhaAtual = Number(0)
let campoAtual = Number(0)

function cliqueLetra(letra) {
    console.log(letra)
    document.getElementById(`linha${linhaAtual}`+`campo${campoAtual}`).value = letra
    if (campoAtual <= 4) {
        campoAtual++        
    } else {
        campoAtual = 0
    }
}

function apagar() {
    if (campoAtual < 4) {
        document.getElementById(`linha${linhaAtual}`+`campo${campoAtual - 1}`).value = ''
        campoAtual--        
    } else {
        document.getElementById(`linha${linhaAtual}`+`campo${campoAtual - 1}`).value = ''
        campoAtual--
    }
}

function resetar() {
    location.reload();    
}


function confirmar() {
    let palavraAtualArray = []
    for (let i = 0; i < 5; i++) {
        palavraAtualArray.push((document.getElementById(`linha${linhaAtual}`+`campo${i}`).value).toLowerCase());
        palavraAtual = (palavraAtualArray.toString()).replaceAll(",","")
    }
    console.log(`A palavra testada é "${palavraAtual}".`)
    // if (palavrasPossiveis.includes(`${palavraAtual}`)) {
    //     alert(`Parece que ${palavraAtual} não é uma palavra válida. Caso a sua palavra possua acentos e "ç", você pode retirá-los e/ou subistua o "ç" por "c". Caso não possua, tente outra palavra, por favor.`)
    //     } else {
            verificarLetras()

    // }
    palavraAtualArray = []
}

function verificarLetras() {
    let letrasCertas = 0

    for (let i = 0; i < palavraRandomArray.length; i++) {
        let letra = (document.getElementById(`linha${linhaAtual}`+`campo${i}`).value).toLowerCase();
        let letraContida = palavraRandom.includes(`${letra}`)
 
                
        document.getElementById(`linha${linhaAtual}`+`campo${i}`).style.color = 'black';
        document.getElementById(`${letra}`).style.color = 'black';
        
        if (letraContida === true && letra === palavraRandomArray[i]) {
            console.log(`Letra "${letra}" encontrada na mesma posicao`);
            document.getElementById(`linha${linhaAtual}`+`campo${i}`).style.backgroundColor = '#009f03';
            document.getElementById(`${letra}`).style.backgroundColor = '#009f03';
            letrasCertas++
        } else if (letraContida === true) {
            console.log(`Letra "${letra}" encontrada em posicao diferente.`);
            document.getElementById(`linha${linhaAtual}`+`campo${i}`).style.backgroundColor = 'yellow';
            document.getElementById(`${letra}`).style.backgroundColor = 'yellow';
        } else {
            console.log(`Letra "${letra}" não encontrada.`);
            document.getElementById(`linha${linhaAtual}`+`campo${i}`).style.backgroundColor = 'red';
            document.getElementById(`${letra}`).style.backgroundColor = 'red';
        }      
    }  
    
    if (letrasCertas == 5) {
        alert(`Parabéns, você acertou! A palavra do dia era ${palavraRandom}.`)
        }
}