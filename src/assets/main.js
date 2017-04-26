let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let results = document.getElementById('results');
function guess() {
    let input = document.getElementById('user-guess').value;
/* STEP 8 */
	if (answer.value == '' || attempt.value == '') {
    setHiddenFields();
	}
/* STEP 11 */
	if (!validateInput(input)){
		return false;
	} 
	else {
		attempt.value ++;
	}
/* STEP 14/15/16 */	
	if(getResults(input) == true) {
		setMessage('You Win! :)');
		showAnswer(true);
		showReplay();
	}
	else if(attempt.value >= 10) {
		setMessage('You Lose! :(');
		showAnswer(false);
		showReplay();
	}
	else {setMessage('Incorrect, try again.');
	}
}
/* STEP 5 */
function setHiddenFields() {
	var min = 1000;
	var max = 9999;
	answer.value = Math.floor(Math.random() * (max - min + 1)) + min;
	
/* STEP 6 */
	
/* STEP 7 */
	attempt.value = 0;
}
/* STEP 9 */
function setMessage(message){
	document.getElementById('message').innerHTML = message;
}
/* STEP 10 */
function validateInput(input){
	if(input.length == 4){
		return true;
	}
	else{
		setMessage('Guesses must be exactly 4 characters long.');
		return false;
	}
}
/* STEP 12 */
function getResults(input) {
	var div = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">'
	var inputArray = input.split('');
	var answerArray = answer.value.split('');
	for(i = 0; i < inputArray.length; i++){
		if(inputArray[i] == answerArray[i]){
			div += '<span class="glyphicon glyphicon-ok"></span>';
		}
		else if(answer.value.indexOf(input[i]) > -1 ){
			div += '<span class="glyphicon glyphicon-transfer"></span>';
		}
		else{
			div += '<span class="glyphicon glyphicon-remove"></span>';
		}
	}
	div += '</div></div>';
	results.innerHTML += div;
	
/* STEP 13 */	
	return (input == answer.value);
}
/* STEP 17 */
function showAnswer(show){
	var code = document.getElementById('code');
	code.innerHTML = answer.value;
	if (show == true){
		code.className = 'success';
	}
	else {
		code.className = 'failure';
	}
}
/* STEP 18 */
function showReplay(){
	var guess = document.getElementById('guessing-div');
	var replay = document.getElementById('replay-div');
	guess.style.display = 'none';
	replay.style.display = 'block';

}

