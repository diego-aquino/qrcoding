import Link from 'next/link';
import { FC } from 'react';

import { LogoFullIcon } from '~/assets';
import styles from '~/styles/components/common/Header.module.scss';

import Button from './Button';

const navbarLinks = [{ title: 'Sobre', href: '#' }];

const Header: FC = () => (
  <header className={styles.container}>
    <Link href="/">
      <a className={styles.logo}>
        <LogoFullIcon />
      </a>
    </Link>

    <nav>
      {navbarLinks.map((link) => (
        <Link key={link.title} href={link.href}>
          <a className={styles.navbarLink}>{link.title}</a>
        </Link>
      ))}
      <Link href="#">
        <Button variant="primary">Saiba Mais</Button>
      </Link>
    </nav>
  </header>
);

export default Header;
