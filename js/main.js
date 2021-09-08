'use strict';

// Функция, возвращающая случайное целое положительное число из переданного диапазона включительно
const getRandomNumber =  (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  // Ставим условие, что min положительное число, включая ноль, а также, что min всегда  либо больше, либо равен max.
  if (min >= 0 && min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // eslint-disable-next-line no-undef
  throw new Error(INVALID_ARGUMENT);
};

getRandomNumber(1, 9);

// Функция для проверки максимальной длины строки.

const stringCount = (text, count) => {
  return text.length <= count;
};

console.log(stringCount('Это проверочное сообщение', 14));
