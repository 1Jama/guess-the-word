export const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
