JAVA:
var val1,val2,res, h3
function calcular(operation) {
    var val1 = parseFloat(document.getElementById("v1").value);
    var val2 = parseFloat(document.getElementById("v2").value);
    var h3 = document.getElementById("res");

    if (isNaN(val1) || isNaN(val2)) {
        if (isNaN(val1)) {
            h3.innerHTML = "Valores no validos en la caja 1";
            document.getElementById("v1").focus();
        } else {
            h3.innerHTML = "Valores no validos en la caja 2";
            document.getElementById("v2").focus();
        }
        return;
    }

    var res;
    switch (operation) {
        case 'sum':
            res = val1 + val2;
            break;
        case 'sub':
            res = val1 - val2;
            break;
        case 'mul':
            res = val1 * val2;
            break;
        case 'div':
            if (val2 === 0) {
                h3.innerHTML = "Error: División por cero";
                return;
            }
            res = val1 / val2;
            break;
        default:
            res = "Operación no válida";
    }
    h3.innerHTML = res;
}
