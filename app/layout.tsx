//import "./globals.css";
import { Metadata } from 'next';
import React from 'react';
import '@/styles/globals.scss';  // Import global styles
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vishal Gagan Sahoo', // Default title
  description: 'I build stuff', // Default description
  icons: {
    icon: '/favicon.ico',
  },
};

// Define viewport metadata
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics /> {/* Add Analytics component */}
      </body>
    </html>
  );
}
