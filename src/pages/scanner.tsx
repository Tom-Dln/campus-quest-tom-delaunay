// pages/scanner.tsx
import { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { sauvegarderSucces } from '../utils/storage';
import Page from '@layouts/Page';
import Section from '@layouts/Section';

export default function ScannerPage() {
  useEffect(() => {
    const qrCodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);
    qrCodeScanner.render((decodedText: string) => {
      sauvegarderSucces(decodedText);
      alert(`🗝️ Vous avez débloqué un nouveau Succès ! 📜`);
      // alert(`QRCode : ${decodedText}`);
    }, (error: any) => {
      console.log(error);
    });

    return () => { qrCodeScanner.clear(); };
  }, []);

  return (
    <Page title="Scanner un QRCode">
      <Section className="flex items-center justify-center space-y-4">
        <div id="qr-reader"></div>
      </Section>
    </Page>
  );
}