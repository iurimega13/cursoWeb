document.querySelector("#calcular").addEventListener("click", function () {
    
    let number1 = parseInt(document.querySelector("#number1").value);
    let number2 = parseInt(document.querySelector("#number2").value);
    if (number1 > 0 && number2 > 0) {
        alert(number1 + number2);
    } else {
        alert("Digite os valores para calcular");
    };
});q