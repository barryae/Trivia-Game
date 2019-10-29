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

function main() {
    createStartScreen()
    $('#start').click(startGame)
    $('#submit').click(evaluateAnswer)
}

function startGame() {

}

function createQuestion(question) {
    let questionCard = document.createElement("div");
    questionCard.innerHTML =
        `<div class="row question">
                <div class="col-3"></div>
                <div class="col-6">
                    <p>
                        ${question.question}
                    </p>
                </div>
                <div class="col-3"></div>
            </div>

            <div class="answers">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="answerA" name="answer" class="custom-control-input">
                            <label class="custom-control-label" for="answerA">${question.answerA}</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="answerB" name="answer" class="custom-control-input">
                            <label class="custom-control-label" for="answerB">${question.answerB}</label>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="answerC" name="answer" class="custom-control-input">
                            <label class="custom-control-label" for="answerC">${question.answerC}</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="answerD" name="answer" class="custom-control-input">
                            <label class="custom-control-label" for="answerD">${question.answerD}</label>
                        </div>
                        <button type="button" id='submit' class="btn btn-primary btn-lg submit">Submit</button>
                    </div>
                    <div class="col-4"></div>
                </div>
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
                        You will have 15 seconds to answer each question!
                        If you do not answer in the time allotted, you lose!
                    </p>
                    <button type="button" id='start' class="btn btn-primary btn-lg start">Start</button>
                </div>
                <div class="col-3"></div>
            </div>`
        ;

    questionBox.innerHTML = '';
    questionBox.appendChild(startCard);
}

main();