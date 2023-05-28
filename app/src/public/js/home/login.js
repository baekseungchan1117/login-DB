"use strict"

// 프론트에서 작동하는 자바스크립트


const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id : id.value,
        psword : psword.value
    }
    console.log(req);
}