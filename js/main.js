var currentQuestion;
var score;
var incorrect;
var correct;

var question = [
	{ text:"What are the five countries with the largest population?",
		options:[
		{ optionText:"China", optionValue: 30, answered:0 },
		{ optionText:"India", optionValue: 22, answered:0  },
		{ optionText:"United States", optionValue: 18, answered:0  },
		{ optionText:"Indonesia", optionValue: 15, answered:0  },
		{ optionText:"Brazil", optionValue: 10, answered:0  },
		{ optionText:"Russia", optionValue: 5, answered:0  }
	]},
/*
	{ text:"Question 2",
		options:[
		{ optionText:"China", optionValue: 30 },
		{ optionText:"India", optionValue: 22 },
		{ optionText:"United States", optionValue: 18 },
		{ optionText:"Indonesia", optionValue: 15 },
		{ optionText:"Brazil", optionValue: 10 },
		{ optionText:"Russia", optionValue: 5 }
	]},

	{ text:"Question 3",
		options:[
		{ optionText:"China", optionValue: 30 },
		{ optionText:"India", optionValue: 22 },
		{ optionText:"United States", optionValue: 18 },
		{ optionText:"Indonesia", optionValue: 15 },
		{ optionText:"Brazil", optionValue: 10 },
		{ optionText:"Russia", optionValue: 5 }
	]},

	{ text:"Question 4",
		options:[
		{ optionText:"China", optionValue: 30 },
		{ optionText:"India", optionValue: 22 },
		{ optionText:"United States", optionValue: 18 },
		{ optionText:"Indonesia", optionValue: 15 },
		{ optionText:"Brazil", optionValue: 10 },
		{ optionText:"Russia", optionValue: 5 }
	]},
*/
];

var finalRound = [
  {
    text:"What is the..",
    options: [
      { optionText:"A", optionValue:20 },
      { optionText:"B", optionValue:30 }
    ]
  },

  {
    text:"What is the..",
    options: [
      { optionText:"A", optionValue:20 },
      { optionText:"B", optionValue:30 }
    ]
  },

  {
    text:"What is the..",
    options: [
      { optionText:"A", optionValue:20 },
      { optionText:"B", optionValue:30 }
    ]
  },

  {
    text:"What is the..",
    options: [
      { optionText:"A", optionValue:20 },
      { optionText:"B", optionValue:30 }
    ]
  },

  {
    text:"What is the..",
    options: [
      { optionText:"A", optionValue:20 },
      { optionText:"B", optionValue:30 }
    ]
  },
];

$(document).ready(function (){
	newGame();
	askQuestion();

	$('.question-response').submit(function (event) {
		var userInput = $('.user-input').val().toLowerCase();
		var optionsArr = question[currentQuestion].options;
		event.preventDefault();

		if ((correct <= 6) && (incorrect <= 3)) {

			if (correct == 5) {
				match();
				$('.btn-container').addClass('next-btn');
				$('.question').hide();
				$('.user-input').hide();

			} else if (searchOptions(userInput, optionsArr) !== -1) { 
				match();

			} else {
				noMatch();

			}
			$('.user-input').val('');

		} 
	});

    $('.next').click(function() {
    	nextQuestion();
    });

	$('.final-question').keyup(function(e){
		if (e.which == 13) {
		    var qnum = $(this).data("questionNumber");
		    var currentQuestion = finalRound[qnum];
		    var answer = search($(this).val().toLowerCase(), currentQuestion.options);

		    if(answer > -1){
		    	$(this).siblings('.q-score').html(currentQuestion.options[answer].optionValue);
		      //display currentQuestion.options[answer];
		    }else{
		    	$(this).siblings('.q-score').html("0");
		      //display 0
		    }
		}

      $.ajax({
         url: "http://api.aerisapi.com/countries/search?query=pop:0&sort=pop:-1&limit=6&client_id=zCqKvajWEA7fuUnM810gh&client_secret=ArhTjfFVIfdZyZqWlJZ4j4L3NwtKkp9J3VavqTIr",
         dataType: "jsonp",
         success: function(json) {
            if (json.success == true) {
               var ob = json.response;
               
               $('#js').html(ob[0].place.name.toLowerCase());
            }
            else {
               alert('An error occurred: ' + json.error.description);
            }
         }
      });

});

});

function newGame() {
	currentQuestion = 0;
	score = 0;

	$('.next').hide();
	$('.final').hide();
}

function askQuestion() {
	correct = 0;
	incorrect = 0;

	var text = question[currentQuestion].text;
	var span = '<span>' + text + '</span>';

	$('.question').html(span);	
}

function nextQuestion() {
	var optionResetOne = $('<div class="number">' + '<span>' + 1 + '</span>' + '</div>');
	var optionResetTwo = $('<div class="number">' + '<span>' + 2 + '</span>' + '</div>');
	var optionResetThree = $('<div class="number">' + '<span>' + 3 + '</span>' + '</div>');
	var optionResetFour = $('<div class="number">' + '<span>' + 4 + '</span>' + '</div>');
	var optionResetFive = $('<div class="number">' + '<span>' + 5 + '</span>' + '</div>');
	var optionResetSix = $('<div class="number">' + '<span>' + 6 + '</span>' + '</div>');

	currentQuestion++;

	if (currentQuestion < question.length) {
		askQuestion();
		$('#option-one').html(optionResetOne);
		$('#option-two').html(optionResetTwo);
		$('#option-three').html(optionResetThree);
		$('#option-four').html(optionResetFour);
		$('#option-five').html(optionResetFive);
		$('#option-six').html(optionResetSix);

		$('.next').hide();
		$('.question').show();
		$('.user-input').show();
		$('.correct').hide();
		$('.option-score').hide();
		$('.option').show();
		$('.number span').show();
		$('.incorrect').hide();
	} else {
		finalSurvey();
	}
}

function searchOptions(optionsText, optionsArr) {
	for(i = 0; i < optionsArr.length; i++) {
		if ((optionsText == optionsArr[i].optionText.toLowerCase()) && (optionsArr[i].answered == 0)) {
			optionsArr[i].answered = 1;
			return i;
		}
	} return -1;
}

function search(needle, haystack){
  for(i = 0; i < haystack.length; i++){
    if(needle === haystack[i].optionText.toLowerCase()){
      return i;
    }
  }
  return -1;
}

function match() {
	var optionsArr = question[currentQuestion].options;
	var userInput = $('.user-input').val().toLowerCase();
	var span = $('<div class="correct">' + '<span>' + userInput + '</span>' + '</div>');

	correct++;

	if (optionsArr[0].optionText.toLowerCase() == userInput ) {
		$('#option-one').html(span);
		$('#option-one').append($('<div class="option-score">' + '<span>' + optionsArr[0].optionValue + '</span>' + '</div>'));
			score = optionsArr[0].optionValue + score;
			$('.score h1').html(score);
	} else if (optionsArr[1].optionText.toLowerCase() == userInput ) {
		$('#option-two').html(span);
		$('#option-two').append($('<div class="option-score">' + '<span>' + optionsArr[1].optionValue + '</span>' + '</div>'));
			score = optionsArr[1].optionValue + score;
			$('.score h1').html(score);
	} else if (optionsArr[2].optionText.toLowerCase() == userInput ) {
		$('#option-three').html(span);
		$('#option-three').append($('<div class="option-score">' + '<span>' + optionsArr[2].optionValue + '</span>' + '</div>'));
			score = optionsArr[2].optionValue + score;
			$('.score h1').html(score);
	} else if (optionsArr[3].optionText.toLowerCase() == userInput ) {
		$('#option-four').html(span);
		$('#option-four').append($('<div class="option-score">' + '<span>' + optionsArr[3].optionValue + '</span>' + '</div>'));
			score = optionsArr[3].optionValue + score;
			$('.score h1').html(score);
	} else if (optionsArr[4].optionText.toLowerCase() == userInput ) {
		$('#option-five').html(span);
		$('#option-five').append($('<div class="option-score">' + '<span>' + optionsArr[4].optionValue + '</span>' + '</div>'));
			score = optionsArr[4].optionValue + score;
			$('.score h1').html(score);
	} else {
		$('#option-six').html(span);
		$('#option-six').append($('<div class="option-score">' + '<span>' + optionsArr[5].optionValue + '</span>' + '</div>'));
			score = optionsArr[5].optionValue + score;
			$('.score h1').html(score);
	}
}

function noMatch() {
	incorrect++;
	$('.incorrect').css('display', 'flex').hide();

	if (incorrect == 1) {
		$('.incorrect').fadeIn(2000);
		$('#incorrect-one').fadeIn(2000);
		$('.incorrect').fadeOut(1000);
		$('#incorrect-one').fadeOut(1000);
	} else if (incorrect == 2) {
		$('.incorrect').fadeIn(2000);
		$('#incorrect-two').fadeIn(2000);
		$('.incorrect').fadeOut(1000);
		$('#incorrect-two').fadeOut(1000);
	} else {
		$('.incorrect').fadeIn(2000);
		$('#incorrect-three').fadeIn(2000);
		promise();
		$('.question').hide();
		$('.user-input').hide();
	}	
}

function promise() {
	$('#incorrect-three').fadeOut(500).promise().done(function() {
	    $('.next').fadeIn(500);
	    $('.incorrect').hide();
	});
}

function finalSurvey() {
	$('.game').hide();
	$('.final').show();

	$('.final-question').each(
    function(i,el) {
        if (!el.value || el.value == '') {
            el.placeholder = finalRound[i].text;
        }
    });
}