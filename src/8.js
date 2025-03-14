function getRandomJSCode() {
  let code = '';

  // Generate a random number between 1 and 100
  const randNum = Math.floor(Math.random() * 100) + 1;

  // Use switch statement to determine what type of code to generate
  switch (randNum) {
    case 1:
      code = 'console.log("Hello World!");';
      break;
    case 2:
      code = 'let name = prompt("Enter your name"); alert("Hi, " + name);';
      break;
    case 3:
      code = 'const person = { name: "Alice", age: 30 }; console.log(person.name);';
      break;
    case 4:
      code = 'function greet(name) { alert("Hi, " + name); } greet("Bob");';
      break;
    case 5:
      code = 'const arr = [1, 2, 3]; console.log(arr.length);';
      break;
    case 6:
      code = 'const obj = { a: 1, b: 2 }; console.log(obj.a);';
      break;
    case 7:
      code = 'function add(x, y) { return x + y; } console.log(add(3, 5));';
      break;
    case 8:
      code = 'let num = 10; while (num > 0) { console.log(num); num--; }';
      break;
    case 9:
      code = 'for (let i = 1; i <= 5; i++) { console.log(i); }';
      break;
    case 10:
      code = 'const arr = [1, 2, 3, 4, 5]; const reducedArr = arr.reduce((acc, curr) => acc + curr, 0); console.log(reducedArr);';
      break;
    default:
      code = '';
  }

  return code;
}
