"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("button");
registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (!id.value) return alert("아이디를 입력해주세요.");
  // if (!name.value) return alert("이름을 입력해주세요.");
  // if (!psword.value) return alert("비밀번호를 입력해주세요.");
  // if (!confirmPsword.value) return alert("비밀번호 확인란을 입력해주세요.");
  if (psword.value !== confirmPsword.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };

  console.log(req);

  fetch("register", {
    // 이제 해당 API를 만들자.
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
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.log("회원가입 중 에러 발생");
    });

  // res.json()의 반환값은 Promise다.
  // 기본 res의 반환 값은 Response 스트림인데,
  // .json() 메서드를 통해서 Response스트림을 읽을수 있다.
  // Response는 데이터가 모두 받아진 상태가 아니다.
  // 비동기로 동작
}
