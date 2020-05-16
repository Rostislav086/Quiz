document.addEventListener("DOMContentLoaded", () => {
  // Получаем элементы ======================================================
  const btnOpenModal = document.querySelector("#btnOpenModal"),
    modalBlock = document.querySelector("#modalBlock"),
    btnCloseModal = document.querySelector("#btnCloseModal"),
    questionTitle = document.querySelector("#question"),
    formAnswers = document.querySelector("#formAnswers"),
    prevButton = document.querySelector("#prev"),
    nextButton = document.querySelector("#next");

  // Определяем переменные ==================================================

  const question = [
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

  // Функции ================================================================

  const playTest = () => {
    let numberQuestion = 0;

    const renderAnswer = (index) => {
      question[index].answers.forEach((answer) => {
        const card = `
          <div class="answers-item d-flex flex-column">
            <input type="${question[index].type}" id="${answer.id}" name="answer" class="d-none" />
            <label for="${answer.id}" class="d-flex flex-column justify-content-between">
              <img class="answerImg" src="${answer.url}" alt="burger" />
              <span> ${answer.title}</span>
            </label>
          </div>      
        `;

        formAnswers.insertAdjacentHTML("afterbegin", card);
      });
    };

    const renderQuestion = (indexQuestion) => {
      formAnswers.innerHTML = "";
      questionTitle.textContent = `${question[indexQuestion].question}`;

      renderAnswer(indexQuestion);
    };

    // вызов функций внутри playTest()

    renderQuestion(numberQuestion);

    // Обработчики внутри playTest()

    prevButton.onclick = () => {
      if (numberQuestion == 0) {
        prevButton.classList.add("d-none");
        prevButton.classList.remove("d-block");
      } else {
        numberQuestion--;
        prevButton.classList.remove("d-none");
        nextButton.classList.add("d-block");
        renderQuestion(numberQuestion);
      }
    };

    nextButton.onclick = () => {
      if (numberQuestion < question.length - 1) {
        numberQuestion++;
        prevButton.classList.add("d-block");
        nextButton.classList.remove("d-none");
        renderQuestion(numberQuestion);
      } else {
        nextButton.classList.add("d-none");
        nextButton.classList.remove("d-block");
      }
    };
  };

  const openModal = () => {
    modalBlock.classList.add("d-block");
    playTest();
  };

  const closeModal = () => {
    modalBlock.classList.remove("d-block");
  };

  // Обработчики событий ====================================================

  btnOpenModal.addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
});
