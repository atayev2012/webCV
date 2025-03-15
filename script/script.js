const button = document.querySelector("input");
const body = document.querySelector("body");
const githubImage = document.querySelector("#githubImage");

button.addEventListener("click", () => {
    body.classList.toggle("dark-mode-colors");
    let startPoint = githubImage.src.lastIndexOf("/") + 1;
    let fileName = githubImage.src.slice(startPoint, githubImage.src.length);
    githubImage.src = ((fileName === 'github_black.svg')) ? 'assets/github_white.svg' : 'assets/github_black.svg';
});