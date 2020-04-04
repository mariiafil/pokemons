export const createId = (num: number) => {
  let str = String(num);

  while (str.length < 3) {
    str = `0${str}`;
  }

  return `#${str}`;
};
