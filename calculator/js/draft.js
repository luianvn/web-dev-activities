const display = document.getElementById('display').value;
const display2 = document.getElementById('display2').value;
const operator = document.getElementById('operator').value;

if(display2 !=="") {
    let answer;
    if(operator == "+") {
        answer = Number('display2') + Number('display');
    }

    document.getElementById('display2').value = answer;
    document.getElementById('display').value = "0";
}

else {
    document.getElementById('display').value = "0";
    document.getElementById('display2').value = display;
}

document.getElementById('operator').value = "+";