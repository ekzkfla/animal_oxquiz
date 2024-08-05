var number_id2, problem_id2, answer_id2;

var problem_arr2 = [
  (number2 = [1, 2, 3, 4, 5, 6]),
  (questions2 = [
    "돼지는 돼지다.",
    "용은 용이다.1",
    "인간은 고릴라다.",
    "용은 용이다.2",
    "용은 용이다.3",
    "용은 용이다.4",
  ]),
  (answer2 = ["O", "X", "O", "X", "O", "X"]),
];

var number2 = [1, 2, 3, 4, 5, 6];

var questions2 = [
  "돼지는 돼지다.",
  "용은 용이다.1",
  "인간은 고릴라다.",
  "용은 용이다.2",
  "용은 용이다.3",
  "용은 용이다.4",
];

var answer2 = ["O", "X", "O", "X", "O", "X"];

//초기화
function init() {
  number_id2 = document.getElementById("number_id2");
  problem_id2 = document.getElementById("problem_id2");
  answer_id2 = document.getElementById("answer_id2");

  startNum = 0;
  endNum = 6;
  score = 0;
}
init();

function setProblem() {
  if (startNum == endNum) {
    number_id.innerHTML = "<span class='lable'><결과보기></span>";
    answer_id.innerHTML =
      "<button type='button' class='button res' onclick='btnResFunc();'> 결과보기</button><button type='button' class='button restart' onclick='history.go(0);'>다시하기</button>";
  } else {
    parseInt(startNum + 1);
    return;
  }
}

// export const quizzes = [
//   {
//     title: "동물 퀴즈",
//     questions: [
//       {
//         number: 1,
//         question: "고려시대의 수도는 어디인가요?",
//         options: ["서울", "경주", "강릉", "가야"],
//         answer: 0,
//       },
//       {
//         number: 2,
//         question: "세종대왕이 창제한 한글의 원래 이름은 무엇인가요?",
//         options: ["훈민정음", "훈민한글", "옛글", "고대한글"],
//         answer: 0,
//       },
//       {
//         number: 3,
//         question: "개의 발에는 땀샘이 있다.",
//         options: ["O", "X"],
//         answer: 0,
//       },
//     ],
//   },
//   {
//     title: "주렁 퀴즈",
//     questions: [
//       {
//         number: 1,
//         question: "고려시대의 수도는 어디인가요?",
//         options: ["서울", "경주", "강릉", "가야"],
//         answer: 0,
//       },
//       {
//         number: 2,
//         question: "세종대왕이 창제한 한글의 원래 이름은 무엇인가요?",
//         options: ["훈민정음", "훈민한글", "옛글", "고대한글"],
//         answer: 0,
//       },
//       {
//         number: 3,
//         question: "개의 발에는 땀샘이 있다.",
//         options: ["O", "X"],
//         answer: 0,
//       },
//     ],
//   },
// ];
