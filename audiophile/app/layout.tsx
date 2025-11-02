import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export const metadata = {
title: 'Audiophile',
description: 'Audiophile e-commerce (Stage 3a)'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-manrope">
        <Header />
        {children}
      </body>
    </html>
  );
}