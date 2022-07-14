
let screen = document.querySelector('.screen');
let numbers = document.querySelectorAll('.num');
let funcs = document.querySelectorAll('.func');
let calcField = document.querySelector('.calc-field');
let input = '';


let inputNums = function(button) {
    button.onclick = function() {
        input += button.textContent;
        console.log(input);
        screen.value = input;
        if (input.length > 14) {
            screen.value = 'ERROR';
        }
    }
}

let inputFuncs = function(func) {
    func.onclick = function() {
        if (func.classList.contains('clear')) {
            input = ''; 
        }

        if (func.classList.contains('del')) {
           input = input.slice(0, -1); 
        }

        if (func.classList.contains('sqrt')) {
            if (input < 0) {
                input = 'ERROR';
            }
            else {
                input = eval(input);
                input = Math.sqrt(input);
            } 
        }
        if (func.classList.contains('negative')) {
            input = 0 - input;
        }

        if (func.classList.contains('divide')) {
            input += '/';
            }

        if (func.classList.contains('multiply')) {
            input += '*';
            }

         if (func.classList.contains('plus')) {
            input += '+';
            }
        
        if (func.classList.contains('minus')) {
            input += '-';
            }

        if (func.classList.contains('openbrckt')) {
            input += '(';
            }

        if (func.classList.contains('closebrckt')) {
            input += ')';
            }

        if (func.classList.contains('equal')) {
            input = eval(input);
        }
        screen.value = input;
        }
        
    }

for (let i = 0; i < numbers.length; i++) {
    inputNums(numbers[i]);
}

for (let i = 0; i < funcs.length; i++) {
    inputFuncs(funcs[i]);
}
