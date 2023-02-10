import React from 'react';
import { WebView } from 'react-native-webview';

function WebPage() {
  return (
    <WebView
      source={{ uri: 'https://cpg.stjohn.org.nz/tabs/guidelines' }}
    />
  );
}

export default WebPage;