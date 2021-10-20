export const isEven = (n) => n % 2 === 0;

export const getRandomIntInclusive = (min, max) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);

  // Максимум и минимум включаются
  return Math.floor(Math.random() * (flooredMax - ceiledMin + 1)) + ceiledMin;
};

export const getRandomInt = (min, max) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);

  // Максимум не включается, минимум включается
  return Math.floor(Math.random() * (flooredMax - ceiledMin)) + ceiledMin;
};

export const calculate = (str) => {
  const [a, operation, b] = str.split(' ');
  const x = Number(a);
  const y = Number(b);

  switch (operation) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return NaN;
  }
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let i = 2;

  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1; // вместо i++;
  }

  return true;
};
