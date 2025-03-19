function getRandomJSCode() {
  let code = "";
  const possibleChars = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 10; i++) {
    code += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }

  return code;
}
