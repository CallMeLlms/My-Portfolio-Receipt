import React, { useState } from 'react';
import Loader from './components/Loader';
import Resume from './components/Resume';
import DitherOverlay from './components/DitherOverlay';
import ScannerTransition from './components/ScannerTransition';
import CRTLens from './components/CRTLens';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CRTLens>
      <DitherOverlay />
      <div className="min-h-screen flex justify-center p-4 md:p-12">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <ScannerTransition key="resume">
            <Resume />
          </ScannerTransition>
        )}
      </div>
    </CRTLens>
  );
}
