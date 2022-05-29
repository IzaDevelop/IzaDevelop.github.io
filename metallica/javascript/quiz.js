var myQuestions = [
	{
		question: "Qual dos integrantes já tocou na banda Suicidal Tendencies?",
		answers: {
			a: 'James Hatfield',
            b: 'Rob Trujillo',
			c: 'Krik Hammett',
            d: 'Lars Ulrich'
		},
		correctAnswer: 'b'
	},
	{
		question: "Qual membro é um excelente desenhista?",
		answers: {
			a: 'Lars Ulrich',
			b: 'Krik Hammett',
			c: 'James Hatfield',
			d: 'Rob Trujillo'
		},
		correctAnswer: 'c'
	},
	{
		question: "Os integrantes já apareceram nas série animada Os Simpsons e South Park?",
		answers: {
			a: 'Sim',
			b: 'Não'
		},
		correctAnswer: 'a'
	},
    {
		question: "Qual membro é um dos criadores da banda thrash metal Exodus?",
		answers: {
			a: 'Rob Trujillo',
			b: 'Krik Hammett',
			c: 'James Hatfield',
            d: 'Lars Ulrich',
		},
		correctAnswer: 'b'
	},
    {
		question: "A banda se estabeleceu em São Francisco pela insistência de qual integrante da segunda formação?",
		answers: {
			a: 'James Hatfield',
            b: 'Cliff Burton',
            c: 'James Hatfield',
            d: 'Krik Hammett'
		},
		correctAnswer: 'b'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'

						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
		var answerContainers = quizContainer.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;
		
		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++	
				answerContainers[i].style.color = 'green';
			}
			
			else{	
				answerContainers[i].style.color = 'crimson';
			}
		}
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
