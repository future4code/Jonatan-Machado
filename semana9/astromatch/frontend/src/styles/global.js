import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

body {
  background: #f5f5f5;
}

body,
input,
button {
  font-family: Arial, Helvetica, sans-serif;

}

button{
  cursor: pointer;
  background:#f5f5f5;
  border:0;
}


`;
