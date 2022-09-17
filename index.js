// functions we may need to call upon later?

// to log the value of the inputed text and clear the field
function getInputAndUpdate(inputElement) {
    const text = inputElement.value;
    // clears the input field
    inputElement.value = "";
    // ensures no empty test fields are submitted
    if (text !== "") {
        alert(text);
    }

    console.log(typeof text);
}

//--------------------------------------------------------------------------

// submit button 
let submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', function() {
    const inputElement = document.querySelector('input');
    getInputAndUpdate(inputElement)
});

// playAgain button
let playAgainBtn = document.getElementById('playAgain');
playAgainBtn.addEventListener('click', function() {
    location.reload();
});

// Hint button
let hintButton = document.getElementById('hint');
hintButton.addEventListener('click', function() {
    backgroundChange();
    //alert();
});

// change the background color with a button
let backgroundChange = function() {

    document.body.style.backgroundColor = "black";
    //alert('background changed to blue')

}

// having fun
function getInpuitAndUpdate(inputElement) {
    console.log(inputElement.value);
}