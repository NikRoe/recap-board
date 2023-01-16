import { Roboto } from '@next/font/google';
import styled from 'styled-components';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function Home() {
  return (
    <>
      <h1>Hello students</h1>
      <h2>and welcome</h2>
      <StyledRobotoHeading>Styling mit Roboto und weight</StyledRobotoHeading>
    </>
  );
}

const StyledRobotoHeading = styled.h3`
  font-family: ${roboto.style.fontFamily};
  font-weight: 100;
`;
