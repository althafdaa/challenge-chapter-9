export const getLocalStorageValue = (name) => {
  if (typeof window !== 'undefined') {
    const getData = localStorage.getItem(name);
    if (getData) {
      return JSON.parse(getData);
    } else return null;
  }
};

export const setLocalStorageValue = (key, value) => {
  let stringifyVal = JSON.stringify(value);
  localStorage.setItem(key, stringifyVal);
};
