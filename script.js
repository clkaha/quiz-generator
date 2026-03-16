function generateQuestion(event) {
	event.preventDefault();
	var quizQuestionElement = document.getElementById(`quiz-question-container`);
	var typewriter = new Typewriter(quizQuestionElement, {
		loop: false,
		delay: 75,
		cursor: "",
	});

	typewriter
		.typeString(
			`<div id="quiz-question"><h2>Here are your quiz questions:</h2></p>Quiz questions will appear here.</p></div>`,
		)
		.start();
}

let quizFormElement = document.querySelector("#quiz-generator-form");
quizFormElement.addEventListener("submit", generateQuestion);
