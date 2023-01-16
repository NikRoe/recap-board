import { createGlobalStyle } from 'styled-components';
import { Inter } from '@next/font/google';
import localFont from '@next/font/local';

const inter = Inter({ subsets: ['latin'] });

const myFont = localFont({
  src: '/fonts/Sofia_Sans/SofiaSans-VariableFont_wght.ttf',
});

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${inter.style.fontFamily};
  }
  h2 {
    font-family: ${myFont.style.fontFamily}
  }
`;

export default GlobalStyle;
