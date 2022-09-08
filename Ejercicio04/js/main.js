
var operacion = ""

function inNum(num) {
    document.getElementById("valor").innerHTML += num
}

function upNums() {
    document.getElementById("operacion").innerHTML = document.getElementById("valor").innerHTML
    document.getElementById("valor").innerHTML = ""
} 

function deleteNum() {
    valor = document.getElementById("valor").innerHTML
    document.getElementById("valor").innerHTML = valor.substring(0, valor.length - 1)
}

function dividir() {
    upNums()
    operacion = "/"
}

function multiplicar() {
    upNums()
    operacion = "*"
}

function restar() {
    upNums()
    operacion = "-"
}

function sumar() {
    upNums()
    operacion = "+"
}

function equals() {

    valor = document.getElementById("valor")
    opera = document.getElementById("operacion")

    switch(operacion) {
        case '+': {
          valor.innerHTML = Number(opera.innerHTML) + Number(valor.innerHTML); 
          break;
        }
        case '-': {
          valor.innerHTML = Number(opera.innerHTML) - Number(valor.innerHTML); 
          break;
        }
        case '*': {
          valor.innerHTML = Number(opera.innerHTML) * Number(valor.innerHTML); 
          break;
        }
        case '/': {
          valor.innerHTML = Number(opera.innerHTML) / Number(valor.innerHTML);  
          break;
        }
      }

      opera.innerHTML = ""

}

function restart() {
    document.getElementById("valor").innerHTML = ""
    document.getElementById("operacion").innerHTML = ""
}