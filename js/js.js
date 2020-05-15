document.addEventListener("DOMContentLoaded", () => {
  // Получаем элементы ======================================================
  const btnOpenModal = document.querySelector("#btnOpenModal"),
    modalBlock = document.querySelector("#modalBlock"),
    btnCloseModal = document.querySelector("#btnCloseModal"),
    question = document.querySelector("#question"),
    formAnswers = document.querySelector("#formAnswers");

  // Определяем переменные ==================================================

  const burger = [
    {
      id: "",
      url: "./image/burger.png",
      title: "Стандарт",
    },
    {
      id: "",
      url: "./image/burgerBlack.png",
      title: "Черный",
    },
  ];

  // Функции ================================================================
  const getQuestion = () => {
    question.innerHTML = "Какого цвета бургер вы хотите ? ";
  };

  const getAnswers = () => {
    formAnswers.textContent = "";

    burger.forEach((item) => {
      const card = `
		<div class="answers-item d-flex flex-column">
			<input type="radio" id="answerItem1" name="answer" class="d-none"/>
			<label for="answerItem1" class="d-flex flex-column justify-content-between">
				<img class="answerImg" src="${item.url}" alt="burger" />
				<span>${item.title}</span>
			</label>
		</div>
		`;

      formAnswers.insertAdjacentHTML("afterbegin", card);
    });
  };

  const openModal = () => {
    modalBlock.classList.add("d-block");
    getQuestion();
    getAnswers();
  };

  const closeModal = () => {
    modalBlock.classList.remove("d-block");
  };

  // Обработчики событий ====================================================

  btnOpenModal.addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
});
