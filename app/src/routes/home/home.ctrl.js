"use strict"

const UserStorage = require('../../models/UserStorage')


const output = {

    home : (req, res) => {
        res.render('home/index')
    },

    login : (req,res) => {
        res.render('home/login')
    }
}


const process = {
    login : (req, res) => {
        const id  = req.body.id
        const psword = req.body.psword

        // const userStorage  = new UserStorage() ; -> 인스턴스화 하지 않고 바로 Class에 static을 추가하여 바로 사용가능
        // console.log(UserStorage.users); // -> class에 static을 하지 않으면 undefined 나옴
        // console.log(id);
        // console.log(psword);

        const users = UserStorage.getUsers("id", "psword")  // 내가 필요한 데이터를 가져올 수 있다.

        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인을 실패하였습니다."
        return res.json(response)
    }
}


module.exports = {
    output,
    process
}