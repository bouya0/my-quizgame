const quiz = [
  {
    question: "ラーメンの発祥とされる地域は次の内どこ？",
    answers: ["日本", "中国", "韓国", "台湾"],
    correct: "中国",
  },
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
    question: "つけ麺はどのラーメンショップが発祥とされているでしょうか？",
    answers: [
      "新宿の「武蔵」",
      "中野の「大勝軒」",
      "浅草の「六厘舎」",
      "池袋の「一蘭」",
    ],
    correct: "中野の「大勝軒」",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  //quiz[インデックス].キー名（連想配列なので）で呼び出す。
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

//クリックした時の動きを関数にまとめる
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数があればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
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
