document.addEventListener("DOMContentLoaded", function() {
  console.log("AI Learning Companion Loaded!");
  
  // Dark Mode Toggle
  function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
  }

  // Text-to-Speech Function
  function speakText() {
      let text = document.querySelector(".content").innerText;
      let speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
  }

  // Attach event listeners (if buttons exist)
  const toggleButton = document.querySelector(".toggle-dark-mode");
  if (toggleButton) {
      toggleButton.addEventListener("click", toggleDarkMode);
  }

  const speakButton = document.querySelector(".speak");
  if (speakButton) {
      speakButton.addEventListener("click", speakText);
  }
});
