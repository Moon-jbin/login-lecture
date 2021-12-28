"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then(
      (res) => {
        return res.json();
      }
      //프로미스 타입은 then()메소드로 접근이 가능하다.
    )
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    });

  // res.json()의 반환값은 Promise다.
  // 기본 res의 반환 값은 Response 스트림인데,
  // .json() 메서드를 통해서 Response스트림을 읽을수 있다.
  // Response는 데이터가 모두 받아진 상태가 아니다.
  // 비동기로 동작
}
