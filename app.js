const quiz = [
  {
    question:
      "ラーメンに関する調査の結果、最も人気のあったラーメンの種類は次のうちどれ？",
    answers: ["味噌ラーメン", "醤油ラーメン", "塩ラーメン", "とんこつラーメン"],
    correct: "醤油ラーメン",
  },
  {
    question: "福岡県で主に見られるラーメンのスタイルは次のうちどれ？",
    answers: ["味噌ラーメン", "醤油ラーメン", "塩ラーメン", "とんこつラーメン"],
    correct: "とんこつラーメン",
  },
  {
    question: "ラーメンの発祥とされる地域は次の内どこ？",
    answers: ["中国", "日本", "韓国", "台湾"],
    correct: "中国",
  },
  {
    question: "つけ麺はどのラーメンショップが発祥とされているでしょうか？",
    answers: [
      "新宿の「武蔵」",
      "中野の「大勝軒」",
      "浅草の「六厘舎」",
      "池袋の「一蘭」",
    ],
    correct: "大勝軒",
  },
];

const question =
  "ラーメンに関する調査の結果、最も人気のあったラーメンの種類は次のうちどれ？";
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
