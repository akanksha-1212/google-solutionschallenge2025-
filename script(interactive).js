function speakText() {
    let text = document.getElementById("text").innerText;
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}

function startSpeechRecognition() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = function(event) {
        document.getElementById("speechResult").innerText = event.results[0][0].transcript;
    };
    recognition.start();
}

function changeContent(mood) {
    let content = document.getElementById("learningContent");
    if (mood === "happy") {
        content.innerText = "Great! Let's learn something fun and interactive!";
    } else if (mood === "neutral") {
        content.innerText = "Steady pace is key. Let's go step by step!";
    } else {
        content.innerText = "No worries! Let's break things down for easy learning.";
    }
}

function changeDifficulty() {
    let difficulty = document.getElementById("difficulty").value;
    let content = document.getElementById("adaptiveContent");
    if (difficulty === "easy") {
        content.innerText = "Easy Mode: Basic concepts with simple examples.";
    } else if (difficulty === "medium") {
        content.innerText = "Medium Mode: Let's add some challenges!";
    } else {
        content.innerText = "Hard Mode: Complex problems to test your knowledge!";
    }
}

function toggleContrast() {
    document.body.classList.toggle("high-contrast");
}

function toggleDyslexiaFont() {
    document.body.classList.toggle("dyslexia-font");
}
