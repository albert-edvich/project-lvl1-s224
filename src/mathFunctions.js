export const random = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

export const isEven = n => n % 2 === 0;
