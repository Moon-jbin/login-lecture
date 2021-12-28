"use strict";

const User = require("../../models/User");

// 이 함수는 해당 페이지를 렌더링 해주는 함수

const output = {
  home: (req, res) => {
    // 기능
    res.render("home/index");
  },

  login: (req, res) => {
    // 기능
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

// 이 컨트롤러는 UserStorage에 접근하지 않는다.
const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    // console.log(response);
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
