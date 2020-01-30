var synth = window.speechSynthesis;

var data = [
	['Turn around', 'laugh', 'reach for the sky', 'clap', 'stick out your tongue', 'say your name'],
	['once', 'two times', 'three times', 'four times', 'five times'],
	['rub', 'shake', 'tickle', 'touch', 'twist', 'pat'],
	['toes', 'ears', 'tummy', 'head', 'nose'],
	['march', 'make a funny face', 'say meow', 'yell surprise', 'blink', 'walk like monster']
];
var speakSubjectsButton = document.querySelector('button.subjects');
var speakVerbsButton = document.querySelector('button.verbs');
var speakAdjectivesButton = document.querySelector('button.adjectives');
var speakObjectsButton = document.querySelector('button.objects');
var speakPlacesButton = document.querySelector('button.places');
var speakPhraseButton = document.querySelector('button.phrase');
var speakRepeatButton = document.querySelector('button.repeat');

var theSentence = Array(5);

function speakNow(string) {
	
	synth.cancel();

	var utterThis = new SpeechSynthesisUtterance(string);

	utterThis.rate = 0.7;
	
	synth.speak(utterThis);

}

speakSubjectsButton.addEventListener('click', function() {
	theSentence[0] = randomValueFromArray(data[0]);
	speakNow(theSentence[0]);
});

speakVerbsButton.addEventListener('click', function() {
	theSentence[1] = randomValueFromArray(data[1]);
	speakNow(theSentence[1]);
});

speakAdjectivesButton.addEventListener('click', function() {
	theSentence[2] = randomValueFromArray(data[2]);
	speakNow(theSentence[2]);
});

speakObjectsButton.addEventListener('click', function() {
	theSentence[3] = randomValueFromArray(data[3]);
	speakNow(theSentence[3]);
});

speakPlacesButton.addEventListener('click', function() {
	theSentence[4] = randomValueFromArray(data[4]);
	speakNow(theSentence[4]);
});

speakRepeatButton.addEventListener('click', function() {
	speakNow(theSentence.join(' '));
});

speakPhraseButton.addEventListener('click', function() {
	for (var i = 0; i < data.length; i++) {
		theSentence[i] = randomValueFromArray(data[i]);
	}
	speakNow(theSentence.join(' '));
});

speakRepeatButton.addEventListener('click', function() {
	speakNow(theSentence.join(' '));
});

function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

/* var text = '';
var speakButton = document.querySelector('button');

function myFunction(elem) {
  var x = elem.id;
  
  debugger;
  switch (x) {
      case '1':
          var text1 = 'My';
          var utterThis = new SpeechSynthesisUtterance(text1);
        // Actually speak the text
          synth.speak(utterThis);
          break;
      case '2':
          var text1 = 'Mom';
          var utterThis = new SpeechSynthesisUtterance(text1);
        // Actually speak the text
          synth.speak(utterThis);
          break;
      case '3':
          var text1 = 'Love me';
          var utterThis = new SpeechSynthesisUtterance(text1);
        // Actually speak the text
          synth.speak(utterThis);
          break;
      default:
          return false;
  }
  
} */