"use strict"
const fs = require('fs').promises;


// 데이터를 가지고 있는 곳
// 다른 외부 파일에서 내부 데이터를 접근을 못하게 해야 한다. 그래서 변수를 은닉화를 한다.
class UserStorage {
    static #getUserInfor(data, id){  // 프라이빗한 변수나 메서드는 항상 최상단에 올려줘야한다 암묵적인 개발이다.
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo
    }

    // user로 해당 데이터와 프론트에서 보내는 데이터와 인증 해보기
    // static 정적 변수로 만들어주면 클래스 자체에서 users라는 자체 접근이 가능한다.
    static getUsers(...fileds){ // filed는 변수명
        // const users = this.#users;
        const newUsers = fileds.reduce((newUsers, filed) => {
            if(users.hasOwnProperty(filed)){
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        return fs.readFile('./src/databases/users.json')
        .then((data) =>{
            return this.#getUserInfor(data, id) // 가독성을 좋게 하기위해 따로 만들어둠
        })
        .catch(console.error) // (err) => console.error(err) 파라미터로 넘어온 변수를 실행하는 함수로 넘기면 생략 가능

    }


    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword)
        return { success : true }
    }
}

module.exports = UserStorage


