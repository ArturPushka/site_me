const content = document.getElementById("content");
const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");

let currentQuestion = 0;

const totalQuestions = 6;


// =====================================
// ОБНОВЛЕНИЕ ПРОГРЕССА
// =====================================

function updateProgress() {

    const progress =
        (currentQuestion / totalQuestions) * 100;

    progressBar.style.width = progress + "%";

    if (currentQuestion === 0) {
        questionNumber.textContent = "";
    } else {
        questionNumber.textContent =
            `Вопрос ${currentQuestion} из ${totalQuestions}`;
    }
}


// =====================================
// СТАРТОВЫЙ ЭКРАН
// =====================================

function startScreen() {

    currentQuestion = 0;

    updateProgress();

    content.innerHTML = `

        <h1>
            Хочешь узнать Артура поближе? 👀
        </h1>

        <p>
            Тогда нажимай кнопку и узнавай
            обо мне немного больше 😎
        </p>

        <div class="buttons">

            <button class="primary" id="start">
                Начать 🚀
            </button>

        </div>
    `;


    document.getElementById("start").onclick =
        questionOne;
}


// =====================================
// ВОПРОС 1
// =====================================

function questionOne() {

    currentQuestion = 1;

    updateProgress();

    content.innerHTML = `

        <h1>
            Как ты думаешь, какой Артур? 🤔
        </h1>

        <div class="buttons">

            <button class="wrong" data-answer>
                Спокойный 😌
            </button>

            <button class="wrong" data-answer>
                Ответственный 🫡
            </button>

            <button class="wrong" data-answer>
                Спортивный ⚽
            </button>

            <button class="wrong" data-answer>
                Умный 🧠
            </button>

        </div>
    `;


    document.querySelectorAll("[data-answer]")
        .forEach(button => {

            button.onclick = function () {

                content.innerHTML = `

                    <h1>
                        Ну так-то все варианты
                        правильные 😎
                    </h1>

                    <p>
                        Но спасибо, что выбрала
                        именно этот ❤️
                    </p>

                    <div class="buttons">

                        <button class="primary" id="next">
                            Следующий вопрос ➡️
                        </button>

                    </div>
                `;

                document.getElementById("next").onclick =
                    questionTwo;
            };

        });
}


// =====================================
// ВОПРОС 2 — СПОРТ
// =====================================

function questionTwo() {

    currentQuestion = 2;

    updateProgress();

    content.innerHTML = `

        <h1>
            Как ты думаешь,
            какой спорт я люблю? ⚽
        </h1>

        <div class="buttons">

            <button data-wrong>
                Волейбол 🏐
            </button>

            <button data-correct>
                Футбол ⚽
            </button>

            <button data-wrong>
                Баскетбол 🏀
            </button>

            <button data-wrong>
                Плавание 🏊
            </button>

        </div>
    `;


    document.querySelectorAll("[data-wrong]")
        .forEach(button => {

            button.onclick = function () {

                content.innerHTML = `

                    <h1>
                        Подумай лучше, хомячок 🐹
                    </h1>

                    <button class="primary"
                            id="again">
                        Попробовать ещё раз
                    </button>
                `;

                document.getElementById("again").onclick =
                    questionTwo;
            };

        });


    document.querySelector("[data-correct]")
        .onclick = function () {

            content.innerHTML = `

                <h1>
                    Артур занимался футболом
                    6 лет ⚽
                </h1>

                <p>
                    И это его любимый спорт ❤️
                </p>

                <button class="primary"
                        id="next">
                    Следующий вопрос ➡️
                </button>
            `;

            document.getElementById("next").onclick =
                questionThree;
        };
}


// =====================================
// ВОПРОС 3 — ЕДА
// =====================================

function questionThree() {

    currentQuestion = 3;

    updateProgress();

    content.innerHTML = `

        <h1>
            Какую еду любит Артур? 🌶️
        </h1>

        <div class="buttons">

            <button data-wrong>
                Сладкую 🍰
            </button>

            <button data-correct>
                Острую 🌶️
            </button>

            <button data-wrong>
                Солёную 🧂
            </button>

        </div>
    `;


    document.querySelectorAll("[data-wrong]")
        .forEach(button => {

            button.onclick = function () {

                content.innerHTML = `

                    <h1>
                        Неправильно 😭
                    </h1>

                    <p>
                        Подумай ещё раз, хомячок 🐹
                    </p>

                    <button class="primary"
                            id="again">
                        Попробовать ещё раз
                    </button>
                `;

                document.getElementById("again").onclick =
                    questionThree;
            };

        });


    document.querySelector("[data-correct]")
        .onclick = function () {

            content.innerHTML = `

                <h1>
                    Ну конечно я люблю
                    острую еду 🌶️😂
                </h1>

                <p>
                    Так как это горячо,
                    так и как ысык, хомячок 🐹
                </p>

                <button class="primary"
                        id="next">
                    Следующий вопрос ➡️
                </button>
            `;

            document.getElementById("next").onclick =
                questionFour;
        };
}


// =====================================
// ВОПРОС 4 — СЕЗОН
// =====================================

function questionFour() {

    currentQuestion = 4;

    updateProgress();

    content.innerHTML = `

        <h1>
            Какой сезон любит Артур? ❄️
        </h1>

        <div class="buttons">

            <button data-correct>
                Зима ❄️
            </button>

            <button data-wrong>
                Осень 🍂
            </button>

            <button data-wrong>
                Весна 🌸
            </button>

            <button data-wrong>
                Лето ☀️
            </button>

        </div>
    `;


    document.querySelectorAll("[data-wrong]")
        .forEach(button => {

            button.onclick = function () {

                content.innerHTML = `

                    <h1>
                        Не угадала 😭
                    </h1>

                    <p>
                        Подумай лучше, хомячок 🐹
                    </p>

                    <button class="primary"
                            id="again">
                        Попробовать ещё раз
                    </button>
                `;

                document.getElementById("again").onclick =
                    questionFour;
            };

        });


    document.querySelector("[data-correct]")
        .onclick = function () {

            content.innerHTML = `

                <h1>
                    Зима ❄️
                </h1>

                <p>
                    Артур любит зиму только из-за того,
                    что у него день рождения зимой 🎂
                </p>

                <p>
                    А вообще ему нравится
                    дождливая погода 🌧️
                </p>

                <button class="primary"
                        id="next">
                    Следующий вопрос ➡️
                </button>
            `;

            document.getElementById("next").onclick =
                questionFive;
        };
}


// =====================================
// ВОПРОС 5 — ИНТЕРЕСЫ
// =====================================

function questionFive() {

    currentQuestion = 5;

    updateProgress();

    content.innerHTML = `

        <h1>
            Что интересует Артура? 🎯
        </h1>

        <div class="buttons">

            <button data-answer>
                Учёба 📚
            </button>

            <button data-answer>
                Саморазвитие 🧠
            </button>

            <button data-answer>
                Достижение своих целей 🚀
            </button>

        </div>
    `;


    document.querySelectorAll("[data-answer]")
        .forEach(button => {

            button.onclick = function () {

                content.innerHTML = `

                    <h1>
                        Спасибо, что выбрала
                        именно этот ответ ❤️
                    </h1>

                    <p>
                        Но вообще-то все варианты
                        верны 😎
                    </p>

                    <button class="primary"
                            id="next">
                        Последний вопрос ➡️
                    </button>
                `;

                document.getElementById("next").onclick =
                    questionSix;
            };

        });
}


// =====================================
// ВОПРОС 6
// =====================================

function questionSix() {

    currentQuestion = 6;

    updateProgress();

    content.innerHTML = `

        <h1>
            Ну и последний вопрос 👀
        </h1>

        <p>
            Ты теперь немного лучше
            знаешь Артура?
        </p>

        <div class="buttons">

            <button class="primary"
                    id="finish">
                Да 😎
            </button>

        </div>
    `;


    document.getElementById("finish").onclick =
        finish;
}


// =====================================
// ФИНАЛ
// =====================================

function finish() {

    progressBar.style.width = "100%";

    questionNumber.textContent =
        "Тест завершён 🎉";

    content.innerHTML = `

        <h1 class="final">
            Ну вот 😎
        </h1>

        <p>
            Теперь ты немного больше
            знаешь обо мне ❤️
        </p>

        <p>
            Спасибо, что прошла этот
            маленький тест 🐹
        </p>

    `;
}


// =====================================
// ЗАПУСК
// =====================================

startScreen();