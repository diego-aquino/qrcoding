import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';

import styles from '~/styles/components/common/Layout.module.scss';

import Header from './Header';

interface Props {
  pageTitle: string;
}

const Layout: FC<Props> = ({ pageTitle, children }) => (
  <div className={styles.container}>
    <Head>
      <title>{pageTitle}</title>
    </Head>

    <Header />

    <div className={styles.backgroundImageContainer}>
      <Image
        src="/gradient-background.png"
        alt=""
        layout="fill"
        objectFit="cover"
      />
    </div>

    {children}
  </div>
);

export default Layout;
