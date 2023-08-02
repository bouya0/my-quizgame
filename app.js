const question =
  "LINEが実施した「ラーメンに関する調査」の結果、最も人気のあったラーメンの種類は次のうちどれでしょうか？";
const answers = [
  "醤油ラーメン",
  "味噌ラーメン",
  "塩ラーメン",
  "とんこつラーメン",
];
const correct = "醤油ラーメン";

document.getElementById("js-question").textContent = question;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題
const setupQuiz = () => {
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
