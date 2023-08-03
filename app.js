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
    question: "つけ麺はどのラーメン店が発祥とされているでしょうか？",
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
// 問題の背景色を変えるためのクラス名の配列
const backgrounds = [
  "background1",
  "background2",
  "background3",
  "background4",
];
const backgroundLength = backgrounds.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  const jsquestion = document.getElementById("js-question");

  //背景色のクラスの削除
  for (
    let backgroundIndex = 0;
    backgroundIndex < backgroundLength;
    backgroundIndex++
  ) {
    jsquestion.classList.remove(backgrounds[backgroundIndex]);
  }
  //新しい背景色のクラスの追加
  let newClass = backgrounds[quizIndex % backgroundLength];
  //add(newClass)でクラスを生成
  jsquestion.classList.add(newClass);

  //問題文と選択肢の設定
  jsquestion.textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];

    for (
      let backgroundIndex = 0;
      backgroundIndex < backgroundLength;
      backgroundIndex++
    ) {
      $button[buttonIndex].classList.remove(backgrounds[backgroundIndex]);
    }
    $button[buttonIndex].classList.add(newClass);
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
