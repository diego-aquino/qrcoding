import QRCode from 'qrcode.react';
import { ChangeEvent, FC, useCallback, useState } from 'react';

import { CircularRightArrow } from '~/assets';
import { Layout } from '~/components/common';
import styles from '~/styles/pages/HomePage.module.scss';

// 2953 characters, using binary enconding and error correction level "L"
const MAX_QRCODE_CHARACTER_LENGTH = 2953;

const HomePage: FC = () => {
  const [qrCodeValue, setQRCodeValue] = useState('');

  const handleTextareaChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target;

      const isValidValue = value.length <= MAX_QRCODE_CHARACTER_LENGTH;
      if (!isValidValue) return;

      setQRCodeValue(value);
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
