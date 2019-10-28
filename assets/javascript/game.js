const questions = [
    {
        question: 'How many wheels on a car?',
        answerA: '2',
        answerB: '4',
        answerC: '6',
        answerD: '8',
        correct: 'answerB'
    },
]

let questionBox = document.getElementsByClassName('questionBox')[0];

function main() {
    renderQuestion();

}

function renderQuestion() {
    createQuestion(questions[0])
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
                        <button type="button" class="btn btn-primary btn-lg">Submit</button>
                        <button type="button" class="btn btn-secondary btn-lg">Pass</button>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>`;

    questionBox.innerHTML = '';
    questionBox.appendChild(questionCard);
}

main();