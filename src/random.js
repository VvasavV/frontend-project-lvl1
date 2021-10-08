export default function getRandomIntInclusive(min, max) {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);

  // Максимум и минимум включаются
  return Math.floor(Math.random() * (flooredMax - ceiledMin + 1)) + ceiledMin;
}
