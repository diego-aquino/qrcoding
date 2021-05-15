import { FC, useMemo } from 'react';

import { CodeIcon } from '~/assets';
import styles from '~/styles/components/common/Copyright.module.scss';

const Copyright: FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className={styles.container}>
      <span>{currentYear} &copy; QR Coding</span>
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
};

export default Copyright;
