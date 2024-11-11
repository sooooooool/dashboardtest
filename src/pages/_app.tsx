// src/pages/_app.tsx

import React from "react";
import "../styles/globals.css"; // Tailwind CSS와 Daisy UI 스타일 적용
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
