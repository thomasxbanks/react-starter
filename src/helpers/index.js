export const logLabel = (event) => {
  const label = event.currentTarget.getAttribute('aria-label');
  console.log(module.exports.upperCaseText(label));
};
export const alertLabel = (event) => {
  const label = event.currentTarget.getAttribute('aria-label');
  console.log(module.exports.upperCaseText(label));
};
export const upperCaseText = text => text.toUpperCase();
export const lowerCaseText = text => text.toLowerCase();
export const titleCaseText = str => str.replace(
  /\w\S*/g,
  txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
);
export function salt() {
  return Math.random().toString(36).substr(2, 9);
}
export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};
export const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split('');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
export const deleteCookie = (cname) => {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
export const stringToBoolean = (str) => {
  switch (str.toLowerCase().trim()) {
    case 'true':
    case 'yes':
    case '1':
      return true;
    case 'false':
    case 'no':
    case '0':
    case null:
      return false;
    default:
      return Boolean(str);
  }
};

export const debounce = (...args) => {
  let timer = null;
  const fn = args[0];
  const delay = args[1];

  return function wrapFunctionInDebounce() {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const add = (a, b) => a + b;
export const percentage = (a, b) => (a * 100) / b;
export const getKeyByValue = (obj, value) => Object.keys(obj).find(key => obj[key] === value);
export const randomNumber = (min, max) => ~~(Math.floor(Math.random() * max) + min);

export const setInitialDimensions = (element) => {
  const width = window.getComputedStyle(element, null).getPropertyValue('width');
  const height = window.getComputedStyle(element, null).getPropertyValue('height');
  element.style.width = width;
  element.style.height = height;
};
