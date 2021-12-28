"use strict";

class UserStorage {
  // 서버를 껏다가 켜도 데이터 저장한 것이 보존 될수 있게 만들자.
  // 파일에 저장하는 로직을 구현한다.
  static #users = {
    // 외부에서 접근 못하게 은닉화 하기 위하여 # 를 표시한다.
    // # 표시는 변수는 public 에서 private 로 바꾸게 해준다.
    id: ["mjb1209", "문종빈", "우리으나"],
    psword: ["1234", "5678", "123456"],
    // mysql 관계형 필드
    name: ["쫑", "문종빈", "우리으나"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      // newUsers 에는 id 가 들어가고 , filed 에는 psword가 들어간다.
      // newUsers에는 fields의 초깃값이 들어오고 그 다음 변수는 field에 들어간다.
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers; // newUsers가 첫번째 파라미터로 들어가면서 반복할 것이다.
    }, {});
    console.log(newUsers);
    return newUsers;
  } // 이런식으로 데이터는 은닉화 시키고 메서드로 불러온다

  // #users의 데이터를 오브젝트로 전달하는 메소드
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id); // indexOf(id)의 id는 User.js의 getUserInfo("mjb1209")의 id 이다.
    const userKeys = Object.keys(users); // users의 키값들만 리스트로 만들것이다. => [id, psword, name]
    const userInfo = userKeys.reduce((newUser, info) => {
      // id, psword, name을 순차적으로 돌것이다.
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
  }
}

// 이렇게 UserStorage 모델 완성

module.exports = UserStorage;
