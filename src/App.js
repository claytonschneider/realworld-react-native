import React from 'react';
import StoreProvider from './context';
import Navigator from './Navigation';

export default function App() {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  );
}
