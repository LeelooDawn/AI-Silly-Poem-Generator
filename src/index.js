let apiKey = "d0c776oeta30c3dfb9d3ead51c9fd9a4";

let poemGenerator = document.querySelector("#generate");
poemGenerator.addEventListener("submit", generatePoem);

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userPrompt = document.querySelector("#userPrompt");
  let prompt = `Generate a silly limerick or poem about ${userPrompt.value}`;
  let context =
    "You have good knowledge about limericks and poems and can make up silly poems. Generate a 4 line poem or limerick for the user and separate each line with a <br/>. Sign the poem with '~ By your AI buddy'";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemELement = document.querySelector("#poem");
  poemELement.classList.remove("hidden");
  poemELement.innerHTML = "Get ready for a silly poem!";

  axios.get(apiUrl).then(displayPoem);
}

let button = document.querySelector("#button");
button.addEventListener("click", handleClick);

function showAnswer(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
  });
}

function handleClick(event) {
  event.preventDefault();
  let prompt = "Tell me a silly joke please!";
  let context = "You seem funny, tell silly short jokes about animals";
  let answer = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = "Are you ready to laugh?";

  axios.get(answer).then(showAnswer);
}
