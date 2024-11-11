// src/pages/_app.js

import "../styles/globals.css"; // Tailwind CSS와 Daisy UI 스타일 적용

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
