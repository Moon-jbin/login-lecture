"use strict";

const home = (req, res) => {
  // 기능
  res.render("home/index");
};

const login = (req, res) => {
  // 기능
  res.render("home/login");
};

module.exports = {
  home,
  login,
};
