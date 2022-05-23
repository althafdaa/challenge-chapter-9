import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAANZ84LNuGdXXonbwwMbiLVwvqbAM19Nc',
  authDomain: 'game-binar.firebaseapp.com',
  projectId: 'game-binar',
  storageBucket: 'game-binar.appspot.com',
  messagingSenderId: '965541150035',
  appId: '1:965541150035:web:2cf37a672037725e6075a6',
};

const app =  initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app)
