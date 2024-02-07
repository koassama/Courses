var sliderCounter = 0;
var sliderContent = [
  "HTML",
  "CSS",
  "JavaScript",
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  
  sliderValue.classList.remove("holder-animation");
  sliderValue.classList.add("holder-animation");
  
  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 4000);

 // Function to redirect to the main page after a delay
 function redirectToMainPage() {
  window.location.href = "index.html";
}

// Set a delay in milliseconds (e.g., 5000ms for 5 seconds)
var delay = 10500;

// Call the function after the specified delay
setTimeout(redirectToMainPage, delay);
