const numbers = ["Question1/4", "Question2/4", "Question3/4", "Question4/4"];
const numberLength = numbers.length;

const quiz = [
  {
    question: "ラーメンの発祥とされる地域は次のうちどこ？",
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
    question: "つけ麺は次のうちどのラーメン店が発祥とされているでしょうか？",
    answers: [
      "新宿の「麺屋武蔵」",
      "中野の「大勝軒」",
      "千駄木の「TETSU」",
      "大崎の「六厘舎」",
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

// 問題ごとに画像を変えるためのidの配列
const jsImages = ["js-image1", "js-image2", "js-image3", "js-image4"];
const imagesLength = jsImages.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  const jsNumber = document.getElementById("js-number");
  const jsQuestion = document.getElementById("js-question");

  for (let numberIndex = 0; numberIndex < numberLength; numberIndex++) {
    jsNumber.textContent = numbers[quizIndex % numberLength];
  }

  //背景色のクラスの削除
  for (
    let backgroundIndex = 0;
    backgroundIndex < backgroundLength;
    backgroundIndex++
  ) {
    jsQuestion.classList.remove(backgrounds[backgroundIndex]);
  }
  //新しい背景色のクラスの生成
  let newClass = backgrounds[quizIndex % backgroundLength];
  //add(newClass)でクラスを追加
  jsQuestion.classList.add(newClass);

  //問題文と選択肢の設定
  jsQuestion.textContent = quiz[quizIndex].question; //quizの⚪︎番目のオブジェクトのquestionキーを指定
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    //buttonの背景色の削除
    for (
      let backgroundIndex = 0;
      backgroundIndex < backgroundLength;
      backgroundIndex++
    ) {
      $button[buttonIndex].classList.remove(backgrounds[backgroundIndex]);
    }
    // 新しい背景色のクラスの作成
    $button[buttonIndex].classList.add(newClass);
    buttonIndex++;
  }

  //画像の削除
  for (imageIndex = 0; imageIndex < imagesLength; imageIndex++) {
    let imageContainer = document.getElementById(jsImages[imageIndex]);
    imageContainer.style.display = "none";
  }
  //新しい画像の追加
  let currentJsImage = jsImages[quizIndex % imagesLength];
  let currentImageContainer = document.getElementById(currentJsImage);
  currentImageContainer.style.display = "flex";
  imageIndex++;
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
