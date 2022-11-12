var valores = []

function adicionar(){
    
    let txtnumero = document.getElementById("numero")
    if(txtnumero.value.length == 0){
        alert("Adicione pelo menos um numero de 1 a 100")
    }else{
        let numero = Number(txtnumero.value)
        if(numero <= 0 || numero > 100){
            alert("Escolha um numero de 1 a 100")
        }else{
            let sele = document.getElementById("sele")
            let n = 0
            for(let i = 0; i < valores.length; i++){
                if(valores[i] == numero){
                    alert("Este valor ja está na lista, tente um valor diferente!")
                    return
                }
                if(valores[i] < n){
                    n = valores[i]
                }
            }
            valores.push(numero)
            let item = document.createElement("option")
            item.text = `Valor ${numero} adicionado!`
            sele.appendChild(item)
            document.getElementById("result").innerHTML = ""

        }
    }
}

function finalizar(){
    let sele = document.getElementById("sele")
    if(sele.childElementCount == 0){
        alert("Adicione pelo menos um valor na lista para ver o resultado")
    }else{
        
    }
}