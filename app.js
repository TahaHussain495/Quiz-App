
var questions = [
    {
        question: " Q:1  Full form of HTML",
        option1: "Hypertext Markup Language",
        option2: "Hypertext Styling Language",
        option3: "Hypertext Scripting Language",
        correctAnswer: "Hypertext Markup Language",
    },
    {
        question: " Q:2  How to commit in HTML?",
        option1: "//",
        option2: "/**/",
        option3:"<"+"!-- --"+">",
        correctAnswer:"<"+"!-- --"+">",
    },
    {
        question: " Q:3  How many headings in  HTML?",
        option1: "5",
        option2: "6",
        option3:"7",
        correctAnswer:"6",
    },    {
        question: " Q:4  Who is the biggest heading in HTML",
        option1: "<h1>",
        option2: "<h6>",
        option3:"<h3>",
        correctAnswer:"<h1>",
    },    {
        question: " Q:5  What character indicates the end of tag",
        option1: "<",
        option2: ">",
        option3:"/",
        correctAnswer:"/",
    },
    {
        question: " Q:6  Whose tag is use for line break in HTML",
        option1: "<BR>",
        option2: "<br>",
        option3:"<break>",
        correctAnswer:"<br>",
    },    {
        question: " Q:7  How to make an order list HTML?",
        option1: "<ol>",
        option2: "<ul>",
        option3:"<li>",
        correctAnswer:"<ol>",
    },

];

var quest = document.getElementById("question");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var nextButton = document.getElementById("nxtbtn");

var index = 0;
var score= 0;
function loadQuestion() {
    quest.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
}

function enableBtn() {
    nextButton.removeAttribute('disabled');
}
// It finds all the radio buttons on the page that have the name="answer".

function complete() {
    var options = document.getElementsByName('answer');
    var selectedAnswer = "";
    

// Loops through all radio buttons and checks which one is selected (checked).

// options[i].checked means: "Is this radio button selected?"
// options[i].nextElementSibling.innerText gets the text next to the radio button (the answer text inside <span>).
// This refers to the next HTML element immediately after the radio button.
// This gets the actual visible text inside that <span> element.(innertext)

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedAnswer = options[i].nextElementSibling.innerText;
        }
    }

    if (selectedAnswer === questions[index].correctAnswer) {
        score++
        console.log('Correct Answer');
    } else {
        console.log('Wrong Answer');
    }

    index++;

    
    if (index < questions.length) {
        loadQuestion();
        document.getElementById("nxtbtn").setAttribute('disabled', 'true'); 
        resetRadioButtons(); 
    } else {
        Swal.fire({
            title: "Quiz completed",
            text: "You correct answer " + score + " out of 7" ,
            icon: "success"
          });
        
    }
}

function resetRadioButtons() {
    var options = document.getElementsByName('answer');
    for (var i = 0; i < options.length; i++) {
        options[i].checked = false;

    }


}

loadQuestion();
















