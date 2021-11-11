import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { Banner } from './compose';

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Banner></Banner>
      <Footer />
    </>
  );
}
