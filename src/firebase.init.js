
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCsDlkCugIZ0tpF0hnhxMK91x8jw5--ZM4",
  authDomain: "toystore-react-app.firebaseapp.com",
  projectId: "toystore-react-app",
  storageBucket: "toystore-react-app.appspot.com",
  messagingSenderId: "788781623275",
  appId: "1:788781623275:web:2244536f6c29fde1309bae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth;