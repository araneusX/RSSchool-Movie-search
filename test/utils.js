const getRandomWord = () => {
  const vocabulary = ['hello', 'happy', 'hope', 'friend', 'love', 'holidays', 'fun', 'weekend', 'chocolate', 'sweet', 'orange', 'live'];
  return vocabulary[Math.floor(Math.random() * 12)];
};

const yearNormalize = (year) => (
  /\d{1}/.test(year[year.length - 1])
    ? year
    : year.slice(0, year.length - 1)
);

module.exports = {
  getRandomWord,
  yearNormalize,
};
