//Fahrenheit to Celsius JavaScript

// Event Listener
document.getElementById('submit').addEventListener('click', trapAreaCalc);

// Event Function
function trapAreaCalc() {

    // Input
    let sideA = Number(document.getElementById('side-a').value);
    let sideB = Number(document.getElementById('side-b').value);
    let height = Number(document.getElementById('trap-height').value);

    //Processing
    let area = (sideA + sideB) * (height/2);
    let sentence = "The area of the trapezoid with the inputted dimensions is <span class='bold'>" + area + '</span> units squared!';

    //Output
    document.getElementById('output-title').innerHTML = 'Output:';
    document.getElementById('output-sentence'). innerHTML = sentence;
}
