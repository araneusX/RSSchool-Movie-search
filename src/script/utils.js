const normalizeUserRequest = async (userRequest) => {
  let result = userRequest;
  if (/[а-я]/i.test(userRequest)) {
    const res = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200424T234902Z.8d014bf73bf57d47.f9e7b25f34ed56ebfa19624ddee02238e63d3865&text=${userRequest}&lang=ru-en`);
    const translate = await res.json();
    [result] = translate.text;
  }
  return result;
};

export const getMoviesList = async (userRequest, page) => {
  const normalizeRequest = await normalizeUserRequest(userRequest);
  const url = `https://www.omdbapi.com/?s=${normalizeRequest}&page=${page}&apikey=e5a28065`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getMoreInfo = async (moviesArr) => {
  const promises = moviesArr.map(async (movie) => {
    const res = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=e5a28065`);
    const data = await res.json();
    return data;
  });
  const result = await Promise.allSettled(promises);
  return result;
};

export const getPosters = async (moviesArr) => {
  const promises = moviesArr.map(async (movie) => {
    const link = movie.Poster === 'N/A' ? '/src/img/noposter.jpg' : movie.Poster;
    const res = await fetch(link);
    const blob = await res.blob();
    const objectURL = URL.createObjectURL(blob);
    // const image = new Image();
    // image.src = objectURL;
    return objectURL;
  });
  const result = await Promise.allSettled(promises);
  return result;
};

export const getRandomWord = () => {
  const vocabulary = ['happy', 'hope', 'friend', 'love', 'holidays', 'fun', 'weekend', 'chocolate', 'sweet', 'orange'];
  return vocabulary[Math.floor(Math.random() * 10)];
};
