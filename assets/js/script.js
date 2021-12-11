"use strict";
// this function for add task : ------------------------------------------
const addTask = document.querySelector(".add-item button");
const todoContainer = document.querySelector(".todo-container ul");
let inputValue = document.querySelector(".add-item input");
let modalCounter = 0;
addTask.addEventListener('click',addItem);

function addItem(e) {
    e.preventDefault();
    if (inputValue.value != "") {
        let li_tag = document.createElement("li");
        li_tag.innerHTML = `<label>
           <div class="clickable"></div>
           <input type="checkbox">
           <div class="custom-Checkbox"></div>
           <h3 style="user-select: none;">${inputValue.value}</h3>
           </label>
           <div class="btns">
           <button><i class="fas fa-edit"></i></button>
           <button><i class="fas fa-times"></i></button>
           </div>`;
           todoContainer.append(li_tag);
           inputValue.value = "";
           document.querySelector(".modal").style.transform = "translate(400px,0)";
           
           
        }else if(inputValue.value == ""){
        modalCounter++;
        document.querySelector(".modal").style.transform = "translate(0,0)";
        if (modalCounter > 1) {
            document.querySelector(".modal").classList = "modal animate__bounceIn";
            setTimeout(() => {
                document.querySelector(".modal").classList = "modal";
            },900)
        }
        setTimeout(() => {
            document.querySelector(".modal").style.transform = "translate(400px,0)";
        },5000);
    }
}
// this function for edite & Delete & checkbox Buttons : ------------------------------------------
todoContainer.addEventListener('click',deleteLi);
todoContainer.addEventListener('click',checkItem);
function deleteLi(e) {
    const classArray = [...e.target.classList];
    if (classArray[1] == "fa-edit") {
        console.log(e.target.parentElement.parentElement.parentElement);
    }else if (classArray[1] == "fa-times"){
        e.target.parentElement.parentElement.parentElement.remove();
    }
}
function checkItem(e) {
    let h3;
    if (e.target.className == "clickable") {
        h3 = e.target.parentElement.children[3];
        h3.classList.toggle("complete");
    }
}
// this function for dark mode : -----------------------------------------------------------------------------
const darkModeBtn = document.querySelector(".darkMode");
darkModeBtn.addEventListener('click',darkMode);
let darkMode_Counter = 0;

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