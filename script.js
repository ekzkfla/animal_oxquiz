var selectAnswer, score;
var startNum, endNum;
var number_id, problem_id, answer_id;

//초기화
function init() {
  number_id = document.getElementById("number_id");
  problem_id = document.getElementById("problem_id");
  answer_id = document.getElementById("answer_id");

  startNum = 0;
  endNum = 10;
  score = 0;
  setProblem();
}
init();

//문제 세팅
function setProblem() {
  problem_id.innerHTML = problem_arr[1][startNum];
  problem_id.setAttribute("answer", problem_arr[2][startNum]);
  problem_id.setAttribute("reason", problem_arr[3][startNum]);
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
    btnReasonFunc();
    startNum++;
    setProblem();
  } else if (answer != selectAnswer) {
    wrongAlertFunc();
  }
}

/* X버튼 함수 */
function btnXFunc() {
  answer = document.getElementById("problem_id").getAttribute("answer");
  selectAnswer = "X";
  if (answer == selectAnswer) {
    score++;
    btnReasonFunc();
    startNum++;
    setProblem();
  } else if (answer != selectAnswer) {
    wrongAlertFunc();
  }
}

/* 버튼 설명  함수 */
function btnReasonFunc() {
  Swal.fire({
    title: "정답!",
    text: "",
    html: document.getElementById("problem_id").getAttribute("reason"),
    icon: "success",
    confirmButtonColor: "#d33",
    confirmButtonText: "닫기",
    allowQutsideClick: false,
  });
}
/* 틀림 알림 함수 */
function wrongAlertFunc() {
  Swal.fire({
    icon: "error",
    title: "이런...",
    text: "이거 아닌거 같아요... 다른거 찾아볼까요!",
  });
}

/* 결과보기 버튼 함수 */
function btnResFunc() {
  Swal.fire({
    title: "",
    text: "",
    html: "<b>점수는 " + score + "점 만점!!! 여러분이 주렁주렁 퀴즈왕!!</b>",
    icon: "success",
    confirmButtonColor: "#d33",
    confirmButtonText: "닫기",
    allowQutsideClick: false,
  });
}
