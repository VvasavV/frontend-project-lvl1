export const isEven = (n) => n % 2 === 0;

export const getRandomIntInclusive = (min, max) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);

  // Максимум и минимум включаются
  return Math.floor(Math.random() * (flooredMax - ceiledMin + 1)) + ceiledMin;
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  //Максимум не включается, минимум включается
  return Math.floor(Math.random() * (max - min)) + min;
};

export const calculate = (str) => {
  const [a, operation, b] = str.split(" ");
  const x = Number(a);
  const y = Number(b);

  switch (operation) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    default:
      return NaN;
  }
};
