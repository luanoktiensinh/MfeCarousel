import React, { Suspense } from 'react';
import Head from 'next/head';
import ErrorBoundary from '@/utils/ErrorBoundary';
import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header';
import { useState } from 'react';
import Card from '@/components/Card';
import { useDispatch } from 'react-redux';
const HeroCarousel = React.lazy(() => import('HOME/HeroCarousel'));
const Basket = React.lazy(() => import('T1BASKET/Basket'));
const {setBackground} = await import("GLOBAL/global-slide");
const Home = () => {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const dispath = useDispatch();
  const [ loadBasket, setLoadBasket ] = useState(false);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/nextjs-ssr/home/public/favicon.ico"/>
      </Head>
      <main className={styles.root}>
          <Card title='APP SHELL' padding='20px 0'>
            <button
              className='load-basket'
              onClick={() => dispath(setBackground(getRandomColor()))}
            >
              Change Banner Background(GLOBAL MFE)
            </button>
          </Card>
        <Header />
        <div className={styles.container}>
          <Card title='HOME MFE'>
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <HeroCarousel />
              </Suspense>
            </ErrorBoundary>
          </Card>
          <Card title='T1 GLOBAL MFE'>
            <div style={{textAlign: 'center'}}>
              <button className='load-basket' onClick={(() => setLoadBasket(true))}>
                Load Basket from T1
              </button>
            </div>
            
            { loadBasket && <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Basket />
              </Suspense>
            </ErrorBoundary>}
          </Card>
        </div>
      </main>
    </div>
  );
};


export default Home;
