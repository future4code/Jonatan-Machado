import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';

export default createGlobalStyle`
*{ margin: 0;
padding:0;
box-sizing:0;
outline:0;
}

html,body, #root{
  height:100%
}

body{
  text-rendering:optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background:#181818;
  font-family:'Montserrat', sans-serif;
  color:#fff;
}

`;
