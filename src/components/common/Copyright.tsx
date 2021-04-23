import { FC } from 'react';

import { CodeIcon } from '~/assets';
import styles from '~/styles/components/common/Copyright.module.scss';

const Copyright: FC = () => (
  <div className={styles.container}>
    <span>2020 &copy; QR Coding</span>
    <span className={styles.separator}>|</span>
    <a
      href="https://github.com/diego-aquino/qrcoding"
      rel="noopener noreferrer"
      target="_blank"
    >
      <CodeIcon />
      GitHub
    </a>
  </div>
);

export default Copyright;
