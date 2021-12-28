"use strict";
// UserStorage에 접근해서 데이터를 가지고 와야 한다.
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body;
    const { id, psword } = UserStorage.getUserInfo(client.id); //여기서 id, psword의 필드의 값을 가져오자.
    if (id) {
      if (id === client.id && psword === client.psword) {
        return { success: true };
      }
      return {
        success: false,
        msg: "비밀번호가 틀렸습니다.",
      };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." };
  }

  register() {
    const client = this.body;
    UserStorage.save(client);
  }
}

module.exports = User;
