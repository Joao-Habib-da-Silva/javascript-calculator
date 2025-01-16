var operator = window.document.getElementById("operator")

function Numbers(n) {
    operator.innerHTML += n
}
function Delete() {
    operator.innerHTML = ``
}
function Mult() {
    operator.innerHTML += `*`
}
function Minus() {
    operator.innerHTML += `-`
}
function Plus() {
    operator.innerHTML += `+`
}
function Equal() {
    var resultado = operator.textContent
    try {
    var resul = eval(resultado)
    operator.innerHTML = resul }
    catch (e) {
        operator.innerHTML = `Erro`
    }
}
function Pont() {
    operator.innerHTML += `**`
}
