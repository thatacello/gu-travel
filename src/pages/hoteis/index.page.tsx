import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { Banner, Content } from './compose';

export default function Hoteis() {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <Content />
      <Footer />
    </>
  );
}
