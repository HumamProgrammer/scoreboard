let increment1Btn = document.getElementById("number1")
let count1 = 0
function inc1() {
    count1 += 1
    increment1Btn.textContent = count1
}
let increment2Btn = document.getElementById("number2")
let count2 = 0
function inc2() {
    count2 += 1
    increment2Btn.textContent = count2
}


function rst1() {
    count1 = 0
    increment1Btn.textContent = count1
}
function rst2() {
    count2 = 0
    increment2Btn.textContent = count2
}
