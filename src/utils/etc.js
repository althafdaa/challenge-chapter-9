import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase.config"

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


export const Logout = async () => {
  await signOut(auth)
}
