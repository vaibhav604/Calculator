var buttons=document.getElementsByTagName('button');
var input=document.getElementById('input');
var op1=0,op2=null,op=null;

function isOP(val)
{
    return (val=='+' || val=='-' || val=='*' || val=='/' );    
}
function fun(val)
{
    // console.log(val);
    // input.innerText+=val;
    var text=input.textContent.trim();
    if(isOP(val))
    {
        op=val;
        op1=parseFloat(text);
        
        input.textContent="";
    }
    else if(val=='AC')
    {
        input.textContent="";
    }
    else if(val=='C')
    {
        input.innerText=input.innerText.substring(0,input.innerText.length-1);
    }
    else if(val=='.')
    {
        if(text.length && !text.includes('.'))
        {
            input.textContent=text+'.';
        }
    }
    else if(val=='%')
    {
        op1=parseFloat(text);
        op1=op1/100;
        input.textContent=op1;
    }
    else if(val=='=')
    {
        op2=parseFloat(text);
        var res=(eval(op1+' '+op+' '+ op2)).toFixed(2);
        if(res)
        {
            input.textContent=res;
            op1=res;
            op2=null;
            op=null;
        }
    }
    else{
        input.textContent+=val;
    }
};

// keyboard keys binding
function keyboardInput(key) {
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        return false;
    } else {
        key.preventDefault();
        if (key.which === 48) {
            fun('0');
        } else if (key.which === 49) {
            fun('1');
        } else if (key.which === 50) {
            fun('2');
        } else if (key.which === 51) {
            fun('3');
        } else if (key.which === 52) {
            fun('4');
        } else if (key.which === 53) {
            fun('5');
        } else if (key.which === 54) {
            fun('6');
        } else if (key.which === 55) {
            fun('7');
        } else if (key.which === 56) {
            fun('8');
        } else if (key.which === 57) {
            fun('9');
        } else if (key.which === 46) {
            fun('.');
        }  else if (key.which === 42) {
            fun('*');
        } else if (key.which === 47) {
            fun('/');
        } else if (key.which === 43) {
            fun('+');
        } else if (key.which === 45) {
            fun('-');
        } else if (key.which === 13) {
            fun('=');
        } else if (key.which === 99) {
            fun('AC');
        } else {
            display.value = display.value;
        }
        return true;
    }
}


// -- code execution:
window.onload = function () {
    // -- function calling and stuff:
    // for blocking alphabets into input field and helping calculation through keyboard keys
    document.onkeypress = keyboardInput;
    
    // for deleting value using backspace
    document.onkeydown = fun('C');

    // for data(numberic values) input
    for (i = 0; i < inputs.length; i++) {
        inputs[i].onclick = dataInput;
    }

    // for operator(+-*/) input
    for (io = 0; io < operators.length; io++) {
        operators[io].onclick = operatorInput;
    }

    // for displaying the calculated result
    equal.onclick = fun('=');

    // for deleting(backspace) single value
    backspace.onclick = fun('C');

    // for clearing input field
    clear.onclick = fun('AC');
};