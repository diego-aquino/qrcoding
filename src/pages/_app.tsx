import { AppProps } from 'next/app';
import { FC } from 'react';

import '~/styles/globals.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
