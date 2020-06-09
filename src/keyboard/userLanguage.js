const getLanguage = () => {
  let current = 'en';
  if (localStorage.getItem('VirtualKeyboardUserLanguage')) {
    current = localStorage.getItem('VirtualKeyboardUserLanguage');
  } else {
    localStorage.setItem('VirtualKeyboardUserLanguage', current);
  }
  let next = current === 'en' ? 'ru' : 'en';
  const change = () => {
    next = current;
    current = current === 'en' ? 'ru' : 'en';
    localStorage.setItem('VirtualKeyboardUserLanguage', current);
  };
  const getCurrent = () => current;
  const getNext = () => next;

  return {
    getCurrent,
    getNext,
    change,
  };
};

const language = getLanguage();

export default language;
