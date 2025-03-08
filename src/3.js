const randomNumber = Math.floor(Math.random() * 10) + 1;
const randomColor = `hsl(${randomNumber}, ${randomNumber}%, ${randomNumber}%)`;
document.body.style.backgroundColor = randomColor;
