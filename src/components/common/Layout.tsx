import clsx from 'clsx';
import Head from 'next/head';
import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';

import styles from '~/styles/components/common/Layout.module.scss';

import Copyright from './Copyright';
import Download from './Download';
import Header from './Header';

interface Props extends HTMLAttributes<HTMLDivElement> {
  pageTitle: string;
}

const Layout: FC<Props> = ({ pageTitle, className, children }) => (
  <div className={clsx(styles.container, className)}>
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

    <main>{children}</main>

    <footer>
      <Copyright />
    </footer>
  </div>
);

export default Layout;
