"use strict"


// 프론트에서 작동하는 자바스크립트


const id = document.querySelector("#id");
const name = document.querySelector("#name")
const psword = document.querySelector("#psword");
const confirmPasword = document.querySelector("#confirm-psword")
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener('click', register);

function register() {
    if(!id.value) return alert("아이디를 입력해주세요");
    if(psword.value !== confirmPasword.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id : id.value,
        name: name.value,
        psword : psword.value,

    }

    // console.log(req);
    // console.log(JSON.stringify(req));
    
    fetch('/register', {    // 서버에서 받을 API를 만들어줘야 한다. 
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
           },   // 내가 전달하는 데이터가 JSON이라고 알려줘야한다. 
        body : JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) =>{
        if(res.success){
            location.href = "/login";
        } else {
            alert(res.msg)
        }
    })
    .catch((err) => {
        // console.error(new Error("로그인 중 에러 발생"));
        console.error("회원가입 중 에러 발생");
    })
}