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
// this function for select section : ------------------------------------------
// const label = document.querySelector(".todo-container ul li label");
// console.dir();
const select = document.querySelector(".filter-todos");
const ultag = document.querySelector(".todo-container ul");
select.addEventListener('change',selectOtion);

// console.dir(select);
function selectOtion(e) {
    const liTags = [...ultag.children];
    liTags.forEach(element => {
        switch (e.target.value) {
            case "all":
                element.style.display = "flex";
                break;
            case "completed":
                if (element.children[0].children[3].classList.contains("complete")) {
                    element.style.display = "flex";
                }else{
                    element.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!(element.children[0].children[3].classList.contains("complete"))) {
                    element.style.display = "flex";
                }else{
                    element.style.display = "none";
                }
                break;
        }
    });
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
const head = document.getElementById("darkMode");
console.log(head);
darkModeBtn.addEventListener('click',darkMode);
let darkMode_Counter = 0;
function darkMode() {
    darkMode_Counter++;
    if (darkMode_Counter == 1) {
        head.setAttribute("href","assets/css/Darkmode.css");
    }
    else{
        head.setAttribute("href","")
        darkMode_Counter = 0;
    }
}