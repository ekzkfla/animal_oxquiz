var number_id, problem_id, answer_id;
var problem_arr = [
  "q1.png",
  "q2.png",
  "q3.png",
  "q4.png",
  "q5.png",
  "qres.png",
];
var answer_arr = ["O", "X", "X", "O", "O"];

var selectAnswer, score;
var imgNum, startNum, endNum;

function init() {
  number_id = document.getElementById("number_id");
  problem_id = document.getElementById("problem_id");
  answer_id = document.getElementById("answer_id");

  startNum = 0;
  endNum = 5;
  score = 0;

  setProblem();
}
init();

function setProblem() {
  problem_id.innerHTML =
    "<img src='./img/" + problem_arr[startNum] + "' class='problem_img'>";
  if (startNum == endNum) {
    number_id.innerHTML = "<span class='lable'><결과보기></span>";
    answer_id.innerHTML =
      "<button type='button' class='button res' onclick='btnResFunc();'> 결과보기</button><button type='button' class='button restart' onclick='history.go(0);'>다시하기</button>";
  } else {
    number_id.innerHTML =
      "<span class='label'><" + parseInt(startNum + 1) + "></spn>";
    answer_id.innerHTML =
      "<button type='button' class='button o' onclick='btnOFunc();'>O</button><button type='button' class='button x' onclick='btnXFunc();'>X</button>";
  }
}

/* O버튼 함수 */
function btnOFunc() {
  selectAnswer = "O";
  if (answer_arr[startNum] == selectAnswer) {
    score++;
  }
  startNum++;
  setProblem();
}

/* X버튼 함수 */
function btnXFunc() {
  selectAnswer = "X";
  if (answer_arr[startNum] == selectAnswer) {
    score++;
  }
  startNum++;
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
