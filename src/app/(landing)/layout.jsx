'use client'
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect } from 'react'

export default function Layout({ headerVariant , children}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header variant={headerVariant} />
      <CustomCursor />
      {children}
      <Footer />
    </>
  );
}
