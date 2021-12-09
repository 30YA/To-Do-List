"use strict";
// ------------------------------------------------
const darkModeBtn = document.querySelector(".darkMode");
darkModeBtn.addEventListener('click',darkMode);
let darkMode_Counter = 0;
console.log();

function darkMode() {
    darkMode_Counter++;
    if (darkMode_Counter == 1) {
        document.body.style.backgroundColor = 'var(--mainBlack2)';
        document.querySelector(".darkMode").innerHTML = '<i class="fas fa-sun"></i>';
        document.querySelector(".darkMode").style.color = 'var(--mainYellow)';
        // add-item
        document.querySelector(".add-item .todo-input").style.backgroundColor = 'var(--mainBlack3)';
        document.querySelector(".add-item .todo-input").style.color = 'var(--mainWhite)';
        // select
        document.querySelector(".select select").style.backgroundColor = 'var(--mainBlack3)';
        document.querySelector(".select select").style.color = 'var(--mainWhite)';
        // ul li
        document.querySelector(".todo-container").style.backgroundColor = 'var(--mainBlack3)';
        document.querySelector(".todo-container").style.boxShadow = "1px 5px 50px -10px rgba(0, 0, 0, 1)"
        let li = document.querySelectorAll(".todo-container ul li label h3");
        for(let key of li){
            key.style.color = 'var(--mainWhite)';
        }
    }
    else{
        document.body.style.backgroundColor = "var(--bodyColor)";
        document.querySelector(".darkMode").innerHTML = '<i class="fas fa-moon"></i>';
        document.querySelector(".darkMode").style.color = 'var(--mainWhite)';
        // add-item
        document.querySelector(".add-item .todo-input").style.backgroundColor = 'var(--mainWhite)';
        document.querySelector(".add-item .todo-input").style.color = 'var(--mainBlack)';
        // select
        document.querySelector(".select select").style.backgroundColor = 'var(--mainWhite)';
        document.querySelector(".select select").style.color = 'var(--mainBlack)';
        // ul li
        document.querySelector(".todo-container").style.backgroundColor = 'var(--mainWhite)';
        document.querySelector(".todo-container").style.boxShadow = "1px 5px 50px -1px rgba(95, 95, 95, 0.4)"
        let li = document.querySelectorAll(".todo-container ul li label h3");
        for(let key of li){
            key.style.color = 'var(--mainBlack)';
        }
        darkMode_Counter = 0;
    }
}