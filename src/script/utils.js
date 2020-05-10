const normalizeUserRequest = async (userRequest) => {
  let result = userRequest;
  if (/[а-я]/i.test(userRequest)) {
    try {
      const res = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200424T234902Z.8d014bf73bf57d47.f9e7b25f34ed56ebfa19624ddee02238e63d3865&text=${userRequest}&lang=ru-en`);
      const translate = await res.json();
      [result] = translate.text;
    } catch (err) {
      throw new Error('Translation is not available now. Try again later or use English');
    }
  }
  return result;
};

export const getMoreInfo = async (moviesArr) => {
  const promises = moviesArr.map(async (movie) => {
    //const res = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=e5a28065`);
    //const data = await res.json();
    //return data;
  });

  const allData = await Promise.allSettled(promises);
  const result = {};
  let ok = true;
  result.value = allData.map((item) => {
    if (item.value && item.value.Response === 'True') {
      return item;
    }
    ok = false;
    return {
      value: { Ratings: [{ Value: 'N/A' }] },
    };
  });
  result.ok = ok;
  return result;
};

export const getPosters = async (moviesArr) => {
  const promises = moviesArr.map(async (movie) => {
    const link = movie.Poster === 'N/A' ? '/src/img/noposter.jpg' : movie.Poster;
    let res;
    try {
      res = await fetch(link);
    } catch (err) {
      res = await fetch('/src/img/noposter.jpg');
    }
    if (!res.ok) {
      res = await fetch('/src/img/noposter.jpg');
    }
    const blob = await res.blob();
    const objectURL = URL.createObjectURL(blob);
    return objectURL;
  });
  const result = await Promise.allSettled(promises);
  return result;
};

export const getMoviesList = async (userRequest, page) => {
  let data;
  const normalizeRequest = await normalizeUserRequest(userRequest);
  const preparedRequest = normalizeRequest.split(' ').join('+');
  try {
    const url = `https://www.omdbapi.com/?s=${preparedRequest}&page=${page}&apikey=e5a28065`;
    const res = await fetch(url);
    data = await res.json();
    if (data.Search) {
      const uniqueMovies = [];
      let duplicates = 0;
      data.Search.forEach((movie) => {
        if (!uniqueMovies.find((item) => item.imdbID === movie.imdbID)) {
          uniqueMovies.push(movie);
        } else {
          duplicates += 1;
        }
      });
      data.Search = uniqueMovies;
      data.duplicates = duplicates;
    }
    data.request = normalizeRequest;
  } catch (err) {
    throw new Error('Unable to get data. Try again later');
  }
  return data;
};

export const getRandomWord = () => {
  const vocabulary = ['hello', 'happy', 'hope', 'friend', 'love', 'holidays', 'fun', 'weekend', 'chocolate', 'sweet', 'orange', 'live'];
  return vocabulary[Math.floor(Math.random() * 12)];
};

export const getShowSlidersCount = (slider) => {
  let slidesCount;
  switch (slider.currentBreakpoint) {
    case '@1': slidesCount = 2;
      break;
    case '@1.3': slidesCount = 3;
      break;
    case '@1.8': slidesCount = 4;
      break;
    default: slidesCount = 1;
  }
  return slidesCount;
};
