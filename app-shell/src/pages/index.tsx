import React, { Suspense } from 'react';
import Head from 'next/head';
import ErrorBoundary from '@/utils/ErrorBoundary';
import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header';

const HeroCarousel = React.lazy(() => import('HOME/HeroCarousel'));
const Basket = React.lazy(() => import('T1BASKET/Basket'));

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/nextjs-ssr/home/public/favicon.ico"/>
      </Head>
      <Header />
      <main className={styles.root}>
        <div className={styles.container}>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <HeroCarousel />
            </Suspense>
          </ErrorBoundary>
          <div style={{textAlign: 'center', textTransform: 'uppercase', color: 'black', marginTop: '50px'}}>BASKET FROM T1</div>
          
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Basket />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
};


export default Home;
