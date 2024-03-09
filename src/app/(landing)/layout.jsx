'use client'
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect } from 'react'

export default function Layout({children}) {
  return (
    <>
      <Header />
      <CustomCursor />
      {children}
      <Footer />
    </>
  );
}
