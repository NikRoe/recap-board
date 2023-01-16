import GlobalStyle from '@/globalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
