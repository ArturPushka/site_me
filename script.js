const content = document.getElementById("content");
const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwW6Iul4iAsmeJB8CjdcGdfEpzPDPU65KmB6enFAXUkX-qyDZoAlVkW42MDlhRMJqn4/exec";

let currentQuestion = 0;
const totalQuestions = 6;

let answers = {
    name: "",
    sport: "",
    food: "",
    season: "",
    interest: ""
};

function updateProgress() {
    const progress = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = progress + "%";

    if (currentQuestion === 0) {
        questionNumber.textContent = "";
    } else {
        questionNumber.textContent =
            `Вопрос ${currentQuestion} из ${totalQuestions}`;
    }
}

function startScreen() {
    currentQuestion = 0;
    updateProgress();

    content.innerHTML = `
        <h1>
            Хочешь узнать Артура поближе? 👀
        </h1>

        <p>
            Тогда сначала напиши своё имя или никнейм 😎
        </p>

        <input
            id="nameInput"
            type="text"
            placeholder="Твоё имя или ник"
            maxlength="30"
            style="
                width: 80%;
                padding: 15px;
                border: 2px solid #eeeeee;
                border-radius: 15px;
                font-size: 18px;
                text-align: center;
                outline: none;
            "
        >

        <div class="buttons">
            <button class="primary" id="start">
                Начать 🚀
            </button>
        </div>
    `;

    document.getElementById("start").onclick = function () {
        const name = document.getElementById("nameInput").value.trim();

        if (!name) {
            alert("Напиши своё имя или никнейм 😄");
            return;
        }

        answers.name = name;
        questionOne();
    };
}

function questionOne() {
    currentQuestion = 1;
    updateProgress();

    content.innerHTML = `
        <h1>
            Как ты думаешь, какой Артур? 🤔
        </h1>

        <div class="buttons">
            <button data-answer>Спокойный 😌</button>
            <button data-answer>Ответственный 🫡</button>
            <button data-answer>Спортивный ⚽</button>
            <button data-answer>Умный 🧠</button>
        </div>
    `;

    document.querySelectorAll("[data-answer]").forEach(button => {
        button.onclick = function () {
            answers.personality = button.textContent;

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

            document.getElementById("next").onclick = questionTwo;
        };
    });
}

function questionTwo() {
    currentQuestion = 2;
    updateProgress();

    content.innerHTML = `
        <h1>
            Какой спорт я люблю? ⚽
        </h1>

        <div class="buttons">
            <button data-wrong>Волейбол 🏐</button>
            <button data-correct>Футбол ⚽</button>
            <button data-wrong>Баскетбол 🏀</button>
            <button data-wrong>Плавание 🏊</button>
        </div>
    `;

    document.querySelectorAll("[data-wrong]").forEach(button => {
        button.onclick = function () {
            content.innerHTML = `
                <h1>
                    Подумай лучше, хомячок 🐹
                </h1>

                <button class="primary" id="again">
                    Попробовать ещё раз
                </button>
            `;

            document.getElementById("again").onclick = questionTwo;
        };
    });

    document.querySelector("[data-correct]").onclick = function () {
        answers.sport = "Футбол ⚽";

        content.innerHTML = `
            <h1>
                Артур занимался футболом
                6 лет ⚽
            </h1>

            <p>
                И это его любимый спорт ❤️
            </p>

            <button class="primary" id="next">
                Следующий вопрос ➡️
            </button>
        `;

        document.getElementById("next").onclick = questionThree;
    };
}

function questionThree() {
    currentQuestion = 3;
    updateProgress();

    content.innerHTML = `
        <h1>
            Какую еду любит Артур? 🌶️
        </h1>

        <div class="buttons">
            <button data-wrong>Сладкую 🍰</button>
            <button data-correct>Острую 🌶️</button>
            <button data-wrong>Солёную 🧂</button>
        </div>
    `;

    document.querySelectorAll("[data-wrong]").forEach(button => {
        button.onclick = function () {
            content.innerHTML = `
                <h1>
                    Неправильно 😭
                </h1>

                <p>
                    Подумай ещё раз, хомячок 🐹
                </p>

                <button class="primary" id="again">
                    Попробовать ещё раз
                </button>
            `;

            document.getElementById("again").onclick = questionThree;
        };
    });

    document.querySelector("[data-correct]").onclick = function () {
        answers.food = "Острая 🌶️";

        content.innerHTML = `
            <h1>
                Ну конечно я люблю
                острую еду 🌶️😂
            </h1>

            <p>
                Так как это горячо,
                так и как ысык, хомячок 🐹
            </p>

            <button class="primary" id="next">
                Следующий вопрос ➡️
            </button>
        `;

        document.getElementById("next").onclick = questionFour;
    };
}

function questionFour() {
    currentQuestion = 4;
    updateProgress();

    content.innerHTML = `
        <h1>
            Какой сезон любит Артур? ❄️
        </h1>

        <div class="buttons">
            <button data-correct>Зима ❄️</button>
            <button data-wrong>Осень 🍂</button>
            <button data-wrong>Весна 🌸</button>
            <button data-wrong>Лето ☀️</button>
        </div>
    `;

    document.querySelectorAll("[data-wrong]").forEach(button => {
        button.onclick = function () {
            content.innerHTML = `
                <h1>
                    Не угадала 😭
                </h1>

                <p>
                    Подумай лучше, хомячок 🐹
                </p>

                <button class="primary" id="again">
                    Попробовать ещё раз
                </button>
            `;

            document.getElementById("again").onclick = questionFour;
        };
    });

    document.querySelector("[data-correct]").onclick = function () {
        answers.season = "Зима ❄️";

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

            <button class="primary" id="next">
                Следующий вопрос ➡️
            </button>
        `;

        document.getElementById("next").onclick = questionFive;
    };
}

function questionFive() {
    currentQuestion = 5;
    updateProgress();

    content.innerHTML = `
        <h1>
            Что интересует Артура? 🎯
        </h1>

        <div class="buttons">
            <button data-answer>Учёба 📚</button>
            <button data-answer>Саморазвитие 🧠</button>
            <button data-answer>Достижение своих целей 🚀</button>
        </div>
    `;

    document.querySelectorAll("[data-answer]").forEach(button => {
        button.onclick = function () {
            answers.interest = button.textContent;

            content.innerHTML = `
                <h1>
                    Спасибо, что выбрала
                    именно этот ответ ❤️
                </h1>

                <p>
                    Но вообще-то все варианты
                    верны 😎
                </p>

                <button class="primary" id="next">
                    Последний вопрос ➡️
                </button>
            `;

            document.getElementById("next").onclick = questionSix;
        };
    });
}

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
            <button class="primary" id="finish">
                Да 😎
            </button>
        </div>
    `;

    document.getElementById("finish").onclick = finish;
}

function finish() {
    progressBar.style.width = "100%";
    questionNumber.textContent = "Тест завершён 🎉";

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

        <p>
            Результат: <strong>6/6 🎉</strong>
        </p>
    `;

    sendResults();
}

function sendResults() {
    const data = {
        name: answers.name,
        sport: answers.sport,
        food: answers.food,
        season: answers.season,
        interest: answers.interest,
        score: "6/6"
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        console.log("Результат отправлен!");
    })
    .catch(error => {
        console.error("Ошибка отправки:", error);
    });
}

startScreen();
