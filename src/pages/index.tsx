import QRCode from 'qrcode.react';
import { ChangeEvent, FC, useCallback, useState } from 'react';

import { CircularRightArrow, CloudDownload, Copiar } from '~/assets';
import { Layout } from '~/components/common';
import Copy from '~/components/common/Copy';
import Download from '~/components/common/Download';
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
      <div className={styles.tituloGenerator}>
        <h1>Compartilhe sua mensagem...</h1>
      </div>

      <div className={styles.generatorContainer}>
        <textarea
          value={qrCodeValue}
          onChange={handleTextareaChange}
          placeholder="Digite o seu texto aqui..."
        />
        <CircularRightArrow />
        <QRCode className={styles.qrCode} value={qrCodeValue} renderAs="svg" />
      </div>

      <div className={styles.downloadContainer}>
        <div className={styles.downloader}>
          <Download />
          <CloudDownload />
        </div>
        <div className={styles.copy}>
          <Copy />
          <Copiar />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
