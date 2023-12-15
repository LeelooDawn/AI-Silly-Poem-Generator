function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Twiddle Dee Dee!",
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let poemGenerator = document.querySelector("#generate");
poemGenerator.addEventListener("submit", generatePoem);
