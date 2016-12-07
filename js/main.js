var currentQuestion;
var score;
var incorrect;
var correct;
var questions = [];

      $.ajax({
         url: "http://api.aerisapi.com/countries/search?query=pop:0&sort=pop:-1&limit=6&client_id=zCqKvajWEA7fuUnM810gh&client_secret=ArhTjfFVIfdZyZqWlJZ4j4L3NwtKkp9J3VavqTIr",
         dataType: "jsonp",
         success: function(json) {
         	console.log(json.response);
            if (json.success == true) {
               var ob = json.response;     
               var countryArr = [];
               var val = 30;
               var totalPopulation = 0;

               for(i=0; i < ob.length; i++) {
               	var option = {}
               	option.optionText = ob[i].place.name;
               	option.optionValue = ob[i].profile.pop;
               	option.answered = 0;
                  countryArr.push(option);
                totalPopulation = totalPopulation + ob[i].profile.pop;
               }  

		      for (i = 0; i < countryArr.length; i++) {
		      	var percent = (countryArr[i].optionValue/totalPopulation) * 100;
		      	countryArr[i].optionValue =  Math.floor(percent);
		      }              

            var question1 = {};
            question1.questionText = "What are the countries with the largest population?";
            question1.options = countryArr;

            questions.push(question1);

            askQuestion();
            }
            else {
               alert('An error occurred: ' + json.error.description);
            }
         }
      });

      $.ajax({
         url: "http://api.aerisapi.com/countries/search?query=area:7000000:20000000&limit=6&client_id=zCqKvajWEA7fuUnM810gh&client_secret=ArhTjfFVIfdZyZqWlJZ4j4L3NwtKkp9J3VavqTIr",
         dataType: "jsonp",     	
         success: function(json) {
         	console.log(json.response);
            if (json.success == true) {
               var ob = json.response;     
               var countryArr = [];
               var val = 30;
               var totalArea = 0;

               ob.sort(function(a, b){
					return b.profile.areaKM - a.profile.areaKM;
				});

               for(i=0; i < ob.length; i++) {
               	var option = {}
               	option.optionText = ob[i].place.name;
               	option.optionValue = ob[i].profile.areaKM;
               	option.answered = 0;
                  countryArr.push(option);
                totalArea = totalArea + ob[i].profile.areaKM;
               }  

		      for (i = 0; i < countryArr.length; i++) {
		      	var percent = (countryArr[i].optionValue/totalArea) * 100;
		      	countryArr[i].optionValue =  Math.floor(percent);
		      }              

            var question2 = {};
            question2.questionText = "What are the countries with the largest area?";
            question2.options = countryArr;

            questions.push(question2);

            askQuestion();
            }
            else {
               alert('An error occurred: ' + json.error.description);
            }
         }
      });

/*      $.ajax({
      	url: "https://api.aerisapi.com/records/search?filter=maxt?query=year:2015&&sort=val&limit=6&client_id=zCqKvajWEA7fuUnM810gh&client_secret=ArhTjfFVIfdZyZqWlJZ4j4L3NwtKkp9J3VavqTIr",
      	//url: "https://api.aerisapi.com/earthquakes/search?query=mag&sort=mag:-1&limit=6&client_id=zCqKvajWEA7fuUnM810gh&client_secret=ArhTjfFVIfdZyZqWlJZ4j4L3NwtKkp9J3VavqTIr",
         dataType: "jsonp",     	
         success: function(json) {
         	console.log(json.response);
            if (json.success == true) {
               var ob = json.response;     
               var countryArr = [];
               var val = 30;
               var totalMag = 0;

               ob.sort(function(a, b){
					return b.report.mag - a.report.mag;
				});

               for(i=0; i < ob.length; i++) {
               	var option = {}
               	option.optionText = ob[i].place.country;
               	option.optionValue = ob[i].report.mag;
               	option.answered = 0;
                  countryArr.push(option);
                totalMag = totalMag + ob[i].report.mag;
               }  


		      for (i = 0; i < countryArr.length; i++) {
		      	var percent = (countryArr[i].optionValue/totalMag) * 100;
		      	countryArr[i].optionValue =  Math.floor(percent);
		      }              

            var question3 = {};
            question3.questionText = "What countries have the largest earthquakes occured in?";
            question3.options = countryArr;

            questions.push(question3);

            askQuestion();
            }
            else {
               alert('An error occurred: ' + json.error.description);
            }
         }
      });*/

      $.ajax({
      	url: "https://api.aerisapi.com/earthquakes/search?filter=light&sort=mag-1&limit=6&client_id=zCqKvajWEA7fuUnM810gh&client_secret=ArhTjfFVIfdZyZqWlJZ4j4L3NwtKkp9J3VavqTIr",
      	//url: "https://api.aerisapi.com/earthquakes/search?query=mag&sort=mag:-1&limit=6&client_id=zCqKvajWEA7fuUnM810gh&client_secret=ArhTjfFVIfdZyZqWlJZ4j4L3NwtKkp9J3VavqTIr",
         dataType: "jsonp",     	
         success: function(json) {
         	console.log(json.response);
            if (json.success == true) {
               var ob = json.response;     
               var countryArr = [];
               var val = 30;
               var totalMag = 0;

               ob.sort(function(a, b){
					return b.report.mag - a.report.mag;
				});

               for(i=0; i < ob.length; i++) {
               	var option = {}
               	option.optionText = ob[i].place.country;
               	option.optionValue = ob[i].report.mag;
               	option.answered = 0;
                  countryArr.push(option);
                totalMag = totalMag + ob[i].report.mag;
               }  


		      for (i = 0; i < countryArr.length; i++) {
		      	var percent = (countryArr[i].optionValue/totalMag) * 100;
		      	countryArr[i].optionValue =  Math.floor(percent);
		      }              

            var question3 = {};
            question3.questionText = "What countries have the largest earthquakes occured in?";
            question3.options = countryArr;

            questions.push(question3);

            askQuestion();
            }
            else {
               alert('An error occurred: ' + json.error.description);
            }
         }
      });

var finalRound = [
  {
    text:"What capital city has the largest population?",
    options: [
      { optionText:"Beijing", optionValue:30, answered:0},
      { optionText:"New Dehli", optionValue:25, answered:0},
      { optionText:"Tokyo", optionValue:20, answered:0},
      { optionText:"Manila", optionValue:10, answered:0},
      { optionText:"Moscow", optionValue:5, answered:0}
    ]
  },
  {
    text:"What are the oldest continuously inhabited cities?",
    options: [
      { optionText:"Luxor", optionValue:30, answered:0},
      { optionText:"Carthage", optionValue:25, answered:0},
      { optionText:"Tripoli", optionValue:20, answered:0},
      { optionText:"Benghazi", optionValue:10, answered:0},
      { optionText:"Axum", optionValue:5, answered:0}
    ]
  },
  {
    text:"What are the most populous cities in the US?",
    options: [
      { optionText:"New York City", optionValue:30, answered:0},
      { optionText:"Los Angeles", optionValue:25, answered:0},
      { optionText:"Chicago", optionValue:20, answered:0},
      { optionText:"Houston", optionValue:10, answered:0},
      { optionText:"Philadelphia", optionValue:5, answered:0}
    ]
  },
  {
    text:"What countries are the all-time highest temperatures recorded?",
    options: [
      { optionText:"United States", optionValue:30, answered:0},
      { optionText:"Tunisia", optionValue:25, answered:0},
      { optionText:"Israel", optionValue:20, answered:0},
      { optionText:"Kuwait", optionValue:10, answered:0},
      { optionText:"Iraq", optionValue:5, answered:0}
    ]
  },
  {
    text:"What countries have the lowest recorded temperatures all-time?",
    options: [
      { optionText:"Antarctica", optionValue:30, answered:0},
      { optionText:"Russia", optionValue:25, answered:0},
      { optionText:"Greenland", optionValue:20, answered:0},
      { optionText:"Canada", optionValue:10, answered:0},
      { optionText:"United States", optionValue:5, answered:0}
    ]
  }
];

$(document).ready(function () {
	newGame();
	//askQuestion();

	$('.question-response').submit(function (event) {
		var userInput = $('.user-input').val().toLowerCase();
		var optionsArr = questions[currentQuestion].options;
		event.preventDefault();

		if ((correct <= 6) && (incorrect <= 3)) {

			if (correct == 5) {
				match();
				$('.next').show();
				$('.next-btn').show();
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
		var qnum = $(this).data("questionNumber");
	    var currentQuestion = finalRound[qnum];
	    var answer = search($(this).val().toLowerCase(), currentQuestion.options);
	    var answered = 0;

			if (e.which == 13) {
			    if(answer > -1){
			    	if (answered == 1) 
			    		console.log(answered);
				    	$(this).siblings('.q-score').html(currentQuestion.options[answer].optionValue);
				    	score = currentQuestion.options[answer].optionValue + score;
				    	$('#overall-score').html(score);
			    } else {
			    	$(this).siblings('.q-score').html("0");
			    }
			}
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

	var text = questions[currentQuestion].questionText;
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

	if (currentQuestion < questions.length) {
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
	var optionsArr = questions[currentQuestion].options;
	var userInput = $('.user-input').val().toLowerCase();
	var span = $('<div class="correct">' + '<span>' + userInput + '</span>' + '</div>');
	correct++;
		
	if (optionsArr[0].optionText.toLowerCase() == userInput ) {
		$('#option-one').html(span);
		$('#option-one').append($('<div class="option-score">' + '<span>' + optionsArr[0].optionValue + '</span>' + '</div>'));
			score = optionsArr[0].optionValue + score;
			$('.score h1').html(score);
			playCorrect();
	} else if (optionsArr[1].optionText.toLowerCase() == userInput ) {
		$('#option-two').html(span);
		$('#option-two').append($('<div class="option-score">' + '<span>' + optionsArr[1].optionValue + '</span>' + '</div>'));
			score = optionsArr[1].optionValue + score;
			$('.score h1').html(score);
			playCorrect();
	} else if (optionsArr[2].optionText.toLowerCase() == userInput ) {
		$('#option-three').html(span);
		$('#option-three').append($('<div class="option-score">' + '<span>' + optionsArr[2].optionValue + '</span>' + '</div>'));
			score = optionsArr[2].optionValue + score;
			$('.score h1').html(score);
			playCorrect();
	} else if (optionsArr[3].optionText.toLowerCase() == userInput ) {
		$('#option-four').html(span);
		$('#option-four').append($('<div class="option-score">' + '<span>' + optionsArr[3].optionValue + '</span>' + '</div>'));
			score = optionsArr[3].optionValue + score;
			$('.score h1').html(score);
			playCorrect();
	} else if (optionsArr[4].optionText.toLowerCase() == userInput ) {
		$('#option-five').html(span);
		$('#option-five').append($('<div class="option-score">' + '<span>' + optionsArr[4].optionValue + '</span>' + '</div>'));
			score = optionsArr[4].optionValue + score;
			$('.score h1').html(score);
			playCorrect();
	} else {
		$('#option-six').html(span);
		$('#option-six').append($('<div class="option-score">' + '<span>' + optionsArr[5].optionValue + '</span>' + '</div>'));
			score = optionsArr[5].optionValue + score;
			$('.score h1').html(score);
			playCorrect();
	}
}

function noMatch() {
	incorrect++;
	$('.incorrect').css('display', 'flex').hide();

	if (incorrect == 1) {
		$('.incorrect').fadeIn(2000);
		$('#incorrect-one').fadeIn(2000);
		playIncorrect();
		$('.incorrect').fadeOut(1000);
		$('#incorrect-one').fadeOut(1000);
	} else if (incorrect == 2) {
		playIncorrect();
		$('.incorrect').fadeIn(2000);
		$('#incorrect-two').fadeIn(2000);
		playIncorrect();
		$('.incorrect').fadeOut(1000);
		$('#incorrect-two').fadeOut(1000);
	} else {
		$('.incorrect').fadeIn(2000);
		$('#incorrect-three').fadeIn(2000);
		playIncorrect();
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

function playCorrect() {
    $('#correct-audio')[0].volume = 0.5;
    $('#correct-audio')[0].load();
    $('#correct-audio')[0].play();
}

function playIncorrect() {
    $('#incorrect-audio')[0].volume = 0.5;
    $('#incorrect-audio')[0].load();
    $('#incorrect-audio')[0].play();	
}

function playTheme() {
    $('#theme-audio')[0].volume = 0.5;
    $('#theme-audio')[0].load();
    $('#theme-audio')[0].play();	
}