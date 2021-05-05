import QRCode from 'qrcode.react';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { saveSvgAsPng } from 'save-svg-as-png';

import { CircularRightArrow, CloudDownloadFrame } from '~/assets';
import { Layout, Button } from '~/components/common';
import styles from '~/styles/pages/HomePage.module.scss';

// 2953 characters, using binary enconding and error correction level "L"
const MAX_QRCODE_CAPACITY = 2953;

const HomePage: FC = () => {
  const [qrCodeValue, setQRCodeValue] = useState('');
  const [includeQRCodeMargin, setIncludeQRCodeMargin] = useState(false);

  const handleTextareaChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target;

      const isValidValue = value.length <= MAX_QRCODE_CAPACITY;
      if (!isValidValue) return;

      setQRCodeValue(value);
    },
    [],
  );

  const downloadQRCode = useCallback(() => {
    setIncludeQRCodeMargin(true);
  }, []);

  useEffect(() => {
    const downloadQRCodeIfMarginIncluded = async () => {
      if (!includeQRCodeMargin) return;

      const qrCodeElement = document.querySelector<SVGSVGElement>(
        '#qrcode-svg',
      );
      if (!qrCodeElement) return;

      await saveSvgAsPng(qrCodeElement, 'qrcode', { scale: 15 });
      setIncludeQRCodeMargin(false);
    };

    downloadQRCodeIfMarginIncluded();
  }, [includeQRCodeMargin]);

  return (
    <Layout pageTitle="QR Coding" className={styles.container}>
      <h1>Compartilhe sua mensagem...</h1>

      <div className={styles.generatorContainer}>
        <textarea
          value={qrCodeValue}
          onChange={handleTextareaChange}
          placeholder="Digite o seu texto aqui..."
          maxLength={MAX_QRCODE_CAPACITY}
        />
        <CircularRightArrow />
        <QRCode
          id="qrcode-svg"
          className={styles.qrCode}
          value={qrCodeValue}
          renderAs="svg"
          includeMargin={includeQRCodeMargin}
        />
      </div>

      <div className={styles.downloadContainer}>
        <Button
          variant="primary"
          className={styles.downloader}
          onClick={downloadQRCode}
        >
          Download
          <CloudDownloadFrame />
        </Button>
      </div>
    </Layout>
  );
};

export default HomePage;
