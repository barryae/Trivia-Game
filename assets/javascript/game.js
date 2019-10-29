const questions = [
    {
        question: 'How many wheels are on a car?',
        answerA: '2',
        answerB: '4',
        answerC: '6',
        answerD: '8',
        correct: 'answerB'
    },
    {
        question: 'What is the boiling point of water in Celsius?',
        answerA: '212',
        answerB: '100',
        answerC: '0',
        answerD: '32',
        correct: 'answerB'
    },
    {
        question: 'What kind of plant is a tomato?',
        answerA: 'berry',
        answerB: 'legume',
        answerC: 'melon',
        answerD: 'grain',
        correct: 'answerA'
    },
    {
        question: 'What is the name of the galaxy closest to ours?',
        answerA: 'Andromeda',
        answerB: 'Beetlegeuse',
        answerC: 'Sirius',
        answerD: 'Aldebaran',
        correct: 'answerA'
    },
    {
        question: 'How many chromosomal pairs exist in human DNA?',
        answerA: '23',
        answerB: '26',
        answerC: '46',
        answerD: '9',
        correct: 'answerA'
    },
]
let questionBox = document.getElementsByClassName('questionBox')[0];
let n = 0
let answeredQuestions = []
let score = 0
let interval

function main() {
    createStartScreen();
    $('#start').click(startGame);
}

function startGame() {
    clearInterval(interval);
    n = Math.floor(Math.random() * questions.length)
    if (!answeredQuestions.includes(n)) {
        console.log(n);
        answeredQuestions.push(n)
        createQuestion(questions[n]);
        $('#submit').click(evaluateAnswer);
        interval = setTimeout(evaluateAnswer, 8000);
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
                        You will have 8 seconds to answer each question!
                        If you do not answer in the time allotted, the question is counted
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
    const userAnswer = $('input[name=answer]:checked').attr('id');
    console.log(userAnswer)
    interval = setTimeout(startGame, 3000);
    if (userAnswer === questions[n].correct) {
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