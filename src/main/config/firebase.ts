// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCKnNsYk2bZORy8AGCXi42SXAeLVemv4xc',
  authDomain: 'uploads-d8a74.firebaseapp.com',
  projectId: 'uploads-d8a74',
  storageBucket: 'uploads-d8a74.appspot.com',
  messagingSenderId: '318570800196',
  appId: '1:318570800196:web:ad7748312b9c994c510811',
  measurementId: 'G-7C6S0WRW04'
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
