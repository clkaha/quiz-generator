function displayQuestions(response) {
	var quizQuestionsElement = document.getElementById(`quiz-questions`);
	var yourQuestions = response.data.answer;
	var typewriter = new Typewriter(quizQuestionsElement, {
		loop: false,
		delay: 50,
		cursor: "",
	});

	typewriter
		.typeString(
			`<h2>Here are your quiz questions:</h2><div>${yourQuestions}</div>`,
		)
		.start();
}

function generateQuestion(event) {
	event.preventDefault();
	let subjectInput = document.querySelector("#subject-input");
	let apiKey = "t892ofdde3d43fb03b089a7dffb097a9";
	let prompt = `Generate five general knowledge quiz questions about ${subjectInput.value}. Write your response in British English. Format your response like this example: <h3>Question 1</h3><p>What is the seventh planet from the sun?</p><h3>Question 2</h3><p>Who directed the Lord of the Rings trilogy?</p><h3>Question 3</h3><p>Who was Henry VIll’s first wife?</p><h2>Answers</h2><ol><li>Uranus</li><li>Peter Jackson</li><li>Catherine of Aragon</li>.`;
	let context =
		"You are a quiz show fan. You love to ask quiz questions. Your mission is to generate simple, general knowledge quiz questions.";
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	var quizQuestionContainer = document.getElementById(
		`quiz-question-container`,
	);
	var typewriter = new Typewriter(quizQuestionContainer, {
		loop: false,
		delay: 50,
		cursor: "",
	});
	typewriter
		.typeString(
			`<div id="quiz-questions"><h2>Just thinking...</h2><p>Generating quiz questions about ${subjectInput.value}.</div>`,
		)
		.start();

	console.log("Generating quiz questions");
	console.log(`Prompt: ${prompt}`);
	console.log(`Contenxt: ${context}`);

	axios.get(apiUrl).then(displayQuestions);
}

let quizFormElement = document.querySelector("#quiz-generator-form");
quizFormElement.addEventListener("submit", generateQuestion);
