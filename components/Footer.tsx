import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';
import Twitter from '@/public/icons/twitter.svg';
import Discord from '@/public/icons/discord.svg';
import GitHub from '@/public/icons/github.svg';
import LinkedIn from '@/public/icons/linkedin.svg';

export const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
      <span>VISHAL GAGAN SAHOO | 2024 &#169;</span>
      <div className="flex gap-3">
        
        <Link href="https://x.com/Unowmeno_7" target="_blank" rel="noopener noreferrer">
          <Image src={Twitter} height={30} width={40} alt="Twitter logo" />
        </Link>
        
        <Link href="https://discord.com/users/756054149942083584" target="_blank" rel="noopener noreferrer">
          <Image src={Discord} height={30} width={40} alt="Discord logo" />
        </Link>

        <Link href="https://github.com/Vishalll07" target="_blank" rel="noopener noreferrer">
          <Image src={GitHub} height={30} width={40} alt="GitHub logo" />
        </Link>

        <Link href="https://www.linkedin.com/in/vishalgagansahoo/" target="_blank" rel="noopener noreferrer">
          <Image src={LinkedIn} height={30} width={40} alt="LinkedIn logo" />
        </Link>
      </div>
    </footer>
  );
};
