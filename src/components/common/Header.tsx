import Link from 'next/link';
import { FC } from 'react';

import { LogoFullIcon } from '~/assets';
import styles from '~/styles/components/common/Header.module.scss';

const Header: FC = () => (
  <header className={styles.container}>
    <Link href="/">
      <a className={styles.logo}>
        <LogoFullIcon />
      </a>
    </Link>
  </header>
);

export default Header;
