const questions = []
let questionBox = document.getElementsByClassName('questionBox')[0];
let n = 0
let answeredQuestions = []
let score = 0
let interval
let userAnswer = ''

function main() {
    $.ajax({
        url: 'https://opentdb.com/api.php?amount=15&type=multiple&category=9',
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.results.length; i++) {
            let answers = []
            answers.push(response.results[i].correct_answer);
            answers.push(response.results[i].incorrect_answers[0]);
            answers.push(response.results[i].incorrect_answers[1]);
            answers.push(response.results[i].incorrect_answers[2]);
            shuffle(answers)
            console.log(answers)
            questions.push(
                {
                    question: `${response.results[i].question}`,
                    "answerA": `${answers[0]}`,
                    "answerB": `${answers[1]}`,
                    "answerC": `${answers[2]}`,
                    "answerD": `${answers[3]}`,
                    "correct": `${response.results[i].correct_answer}`,
                })
        }
    })
    createStartScreen();
    $('#start').click(startGame);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    clearInterval(interval);
    n = Math.floor(Math.random() * questions.length)
    if (!answeredQuestions.includes(n)) {
        console.log(n);
        answeredQuestions.push(n)
        createQuestion(questions[n]);
        $('#submit').click(evaluateAnswer);
        interval = setTimeout(evaluateAnswer, 10000);
    } else if (questions.length === answeredQuestions.length) {
        scorePage()
    } else {
        startGame()
    }
}

function createQuestion(question) {
    let questionCard = document.createElement("div");
    questionCard.innerHTML =
        `<div class="row question">
                <div class="col-2"></div>
                <div class="col-8">
                    <p>
                        ${question.question}
                    </p>
                </div>
                <div class="col-2"></div>
            </div>

            <div class="answers">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="answerA" name="answer" class="custom-control-input">
                            <label class="custom-control-label" for="answerA">${question.answerA}</label>
                        </div>
                    </div>
                    <div class="col-3"></div>
                </div>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="answerB" name="answer" class="custom-control-input">
                            <label class="custom-control-label" for="answerB">${question.answerB}</label>
                        </div>
                    </div>
                    <div class="col-3"></div>
                </div>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="answerC" name="answer" class="custom-control-input">
                            <label class="custom-control-label" for="answerC">${question.answerC}</label>
                        </div>
                        </div>
                        <div class="col-3"></div>
                        <div class="col-3"></div>
                    <div class="col-6">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="answerD" name="answer" class="custom-control-input">
                            <label class="custom-control-label" for="answerD">${question.answerD}</label>
                        </div>
                        </div>
                        <div class="col-3"></div>
                        </div>
                        <button type="button" id='submit' class="btn btn-primary btn-lg submit">Submit</button>
            </div>`;

    questionBox.innerHTML = '';
    questionBox.appendChild(questionCard);
}

function createStartScreen() {
    let startCard = document.createElement("div");
    startCard.innerHTML =
        `<div class="row question">
                <div class="col-3"></div>
                <div class="col-6">
                    <h3>
                        Instructions:
                    </h3>
                    <p>
                        You will have 10 seconds to answer each question!
                        If you do not answer in the time allotted, the question is counted as
                        wrong!
                    </p>
                    <button type="button" id='start' class="btn btn-primary btn-lg start">Start</button>
                </div>
                <div class="col-3"></div>
            </div>`
        ;
    questionBox.innerHTML = '';
    questionBox.appendChild(startCard);
}

function evaluateAnswer() {
    clearInterval(interval);
    interval = setTimeout(startGame, 5000);
    userAnswer = $('input[name=answer]:checked').attr('id');
    console.log(userAnswer)
    if (questions[n][userAnswer] === questions[n].correct) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
}

function correctAnswer() {
    console.log('correct');
    score += 1
    let correctCard = document.createElement("div");
    if (questions.length === answeredQuestions.length) {
        correctCard.innerHTML =
            `<div class="row question">
                <div class="col-3"></div>
                <div class="col-6">
                    <h3>
                        Correct Answer!
                    </h3>
                    <p>
                        Let's see how you did!
                    </p>
                </div>
                <div class="col-3"></div>
            </div>`
    } else {
        correctCard.innerHTML =
            `<div class="row question">
                <div class="col-3"></div>
                <div class="col-6">
                    <h3>
                        Correct Answer!
                    </h3>
                    <p>
                        Prepare yourself for the next question!
                    </p>
                </div>
                <div class="col-3"></div>
            </div>`
    }
    questionBox.innerHTML = '';
    questionBox.appendChild(correctCard);
}

function wrongAnswer() {
    console.log('wrong');
    let wrongCard = document.createElement("div");
    if (questions.length === answeredQuestions.length) {
        wrongCard.innerHTML =
            `<div class="row question">
                <div class="col-3"></div>
                <div class="col-6">
                    <h3>
                        Wrong Answer :(
                    </h3>
                    <p>
                        The correct answer was <strong>${questions[n].correct}</strong>.
                    </p>
                    <p>
                        Let's see how you did!
                    </p>
                </div>
                <div class="col-3"></div>
            </div>`
    } else {
        wrongCard.innerHTML =
            `<div class="row question">
                <div class="col-3"></div>
                <div class="col-6">
                    <h3>
                        Wrong Answer :(
                    </h3>
                    <p>
                    The correct answer was <strong>${questions[n].correct}</strong>.
                    </p>
                    <p>
                        Get ready for your next try!
                    </p>
                </div>
                <div class="col-3"></div>
            </div>`
    }
    questionBox.innerHTML = '';
    questionBox.appendChild(wrongCard);
}

function scorePage() {
    console.log('score');
    let scoreCard = document.createElement("div");
    scoreCard.innerHTML =
        `<div class="row question">
                <div class="col-3"></div>
                <div class="col-6">
                    <h3 class='score'>
                        Score: ${score}
                    </h3>
                    <button type="button" id='score' class="btn btn-primary btn-lg start">Play Again?</button>
                </div>
                <div class="col-3"></div>
            </div>`
        ;
    questionBox.innerHTML = '';
    questionBox.appendChild(scoreCard);
    $('#score').on('click', function () {
        location.reload();
    })
}

main();