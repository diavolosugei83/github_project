const getRandomNumber = () => {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(getRandomNumber());
