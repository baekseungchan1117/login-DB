"use strict"

// 데이터를 가지고 있는 곳
// 다른 외부 파일에서 내부 데이터를 접근을 못하게 해야 한다. 그래서 변수를 은닉화를 한다.
class UserStorage {
    // user로 해당 데이터와 프론트에서 보내는 데이터와 인증 해보기
    static #users = { // static 정적 변수로 만들어주면 클래스 자체에서 users라는 자체 접근이 가능한다.
        id : ["승찬", "원혁", "민지"],
        psword : ["1234", "1234", "123456"],
        name  : ['백승찬', '정원혁', '김민지']
    };

    static getUsers(...fileds){ // filed는 변수명
        const users = this.#users;
        const newUsers = fileds.reduce((newUsers, filed) => {
            if(users.hasOwnProperty(filed)){
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    }
}

module.exports = UserStorage


