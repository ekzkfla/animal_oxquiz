var selectAnswer, score;
var startNum, endNum;
var number_id, problem_id, answer_id;

//초기화
function init() {
  number_id = document.getElementById("number_id");
  problem_id = document.getElementById("problem_id");
  answer_id = document.getElementById("answer_id");

  startNum = 0;
  endNum = 6;
  score = 0;
  setProblem();
}
init();

//문제 세팅
function setProblem() {
  problem_id.innerHTML = problem_arr[1][startNum];
  problem_id.setAttribute("answer", problem_arr[2][startNum]);
  if (startNum == endNum) {
    problem_id.innerHTML = "종료!";
    number_id.innerHTML = "<span class='lable'><결과보기></span>";
    answer_id.innerHTML =
      "<button type='button' class='button res' onclick='btnResFunc();'> 결과보기</button><button type='button' class='button restart' onclick='history.go(0);'>다시하기</button>";
  } else {
    number_id.innerHTML = "<" + parseInt(problem_arr[0][startNum]) + ">";
  }
}

/* O버튼 함수 */
function btnOFunc() {
  answer = document.getElementById("problem_id").getAttribute("answer");
  selectAnswer = "O";
  if (answer == selectAnswer) {
    score++;
  }
  startNum++;
  btnResFunc();
  setProblem();
}

/* X버튼 함수 */
function btnXFunc() {
  answer = document.getElementById("problem_id").getAttribute("answer");
  selectAnswer = "X";
  if (answer == selectAnswer) {
    score++;
  }
  startNum++;
  btnResFunc();
  setProblem();
}

/* 결과보기 버튼 함수 */
function btnResFunc() {
  Swal.fire({
    title: "",
    text: "",
    html: "<b>당신의 점수는 " + score + "점입니다.</b>",
    icon: "success",
    confirmButtonColor: "#d33",
    confirmButtonText: "닫기",
    allowQutsideClick: false,
  });
}
