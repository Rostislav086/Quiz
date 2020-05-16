const questions = [
  {
    question: "Какого цвета бургер?",
    answers: [
      {
        id: 1,
        title: "Стандарт",
        url: "./image/burger.png",
      },
      {
        id: 2,
        title: "Черный",
        url: "./image/burgerBlack.png",
      },
    ],
    type: "radio",
  },
  {
    question: "Из какого мяса котлета?",
    answers: [
      {
        id: 1,
        title: "Курица",
        url: "./image/chickenMeat.png",
      },
      {
        id: 2,
        title: "Говядина",
        url: "./image/beefMeat.png",
      },
      {
        id: 3,
        title: "Свинина",
        url: "./image/porkMeat.png",
      },
    ],
    type: "radio",
  },
  {
    question: "Дополнительные ингредиенты?",
    answers: [
      {
        id: 1,
        title: "Помидор",
        url: "./image/tomato.png",
      },
      {
        id: 2,
        title: "Огурец",
        url: "./image/cucumber.png",
      },
      {
        id: 3,
        title: "Салат",
        url: "./image/salad.png",
      },
      {
        id: 4,
        title: "Лук",
        url: "./image/onion.png",
      },
    ],
    type: "checkbox",
  },
  {
    question: "Добавить соус?",
    answers: [
      {
        id: 1,
        title: "Чесночный",
        url: "./image/sauce1.png",
      },
      {
        id: 2,
        title: "Томатный",
        url: "./image/sauce2.png",
      },
      {
        id: 3,
        title: "Горчичный",
        url: "./image/sauce3.png",
      },
    ],
    type: "radio",
  },
];

const obj = {};

const getData = () => {
  formAnswers.textContent = "LOAD";

  setTimeout(() => {
    fetch("http://localhost:81/Quiz__intens/db.json")
      .then((res) => res.json())
      .then((obj) => playTest(obj.questions));
  }, 2000);
};

const obj = {};

const inputs = [...formAnswers.elements].filter((elem) => elem.checked);

inputs.forEach((elem, index) => {
  obj[`${index}_${questions[numberQuestion].question}`] = elem.value;
});
finalAnswers.push(obj);
