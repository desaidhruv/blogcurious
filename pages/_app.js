import React from 'react';

import '../styles/globals.scss';
import './header.css';
import { Layout } from '../components';
import { Footer } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Footer/>
    </>
  );
}

export default MyApp;
