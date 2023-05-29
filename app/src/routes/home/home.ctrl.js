"use strict"


const output = {

    home : (req, res) => {
        res.render('home/index')
    },

    login : (req,res) => {
        res.render('home/login')
    }
}

// user로 해당 데이터와 프론트에서 보내는 데이터와 인증 해보기
const users = {
    id : ["승찬", "원혁", "민지"],
    psword : ["1234", "1234", "123456"]
}

const process = {
    login : (req, res) => {
        const id  = req.body.id
        const psword = req.body.psword

        // console.log(id);
        // console.log(psword);

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : "로그인을 실패하셨습니다."
        })
    }
}


module.exports = {
    output,
    process
}