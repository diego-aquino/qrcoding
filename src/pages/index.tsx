import QRCode from 'qrcode.react';
import { ChangeEvent, FC, useCallback, useState } from 'react';

import { CircularRightArrow } from '~/assets';
import { Layout } from '~/components/common';
import styles from '~/styles/pages/HomePage.module.scss';

const HomePage: FC = () => {
  const [qrCodeValue, setQRCodeValue] = useState('');

  const handleTextareaChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setQRCodeValue(event.target.value);
    },
    [],
  );

  return (
    <Layout pageTitle="QR Coding" className={styles.container}>
      <div className={styles.generatorContainer}>
        <textarea
          value={qrCodeValue}
          onChange={handleTextareaChange}
          placeholder="Digite o seu texto aqui..."
        />
        <CircularRightArrow />
        <QRCode className={styles.qrCode} value={qrCodeValue} renderAs="svg" />
      </div>
    </Layout>
  );
};

export default HomePage;
