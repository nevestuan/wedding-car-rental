import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import store from '../app/store';

import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
