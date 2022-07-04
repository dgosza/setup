import '../styles/globals.css';
import type { AppProps } from 'next/app';

const testehehe = () => {
  console.log('a');
};

function MyApp({ Component, pageProps }: AppProps) {
  const nome = 'diego';
  console.log('nome');

  return <Component {...pageProps} />;
}

export default MyApp;
