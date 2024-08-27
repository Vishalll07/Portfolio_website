import Image from 'next/image';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import { Typewriter } from '../components/Typewriter';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Define metadata for this specific page
export const metadata = {
  title: 'Home - Vishal Gagan Sahoo',
  description: 'Welcome to my portfolio',
};



const DynamicTypewriter = dynamic(() =>
  import('../components/Typewriter').then((mod) => mod.Typewriter), {
    ssr: false,
  }
);


export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.mainBox}>
        <div className={styles.mainbox1}>
          <Image src="/me.png" alt="cr7" width={150} height={150} />
        </div>

        <h1>
          Hey, I&apos;m <b>Vishal</b>
        </h1>
        <p>
          I am a <DynamicTypewriter />
        </p>
        <p>
          I&apos;m a 21 year old fullstack developer, mostly working on MERN
          stack , WEB3 and Blockchain projects .
        </p>
        <p>I am currently learning Web3 , Solidity, backend and Go</p>
        <br />
        <p>
          I love Cars, Engines, Tech and building things. Some of my recent
          projects I have created is a Live Editor{" "}
          <Link
            href="https://github.com/Vishalll07/collaborativeEditor"
            target="_blank"
            rel="noreferrer"
          >
            Live Editor
          </Link>
          , I have a lot more repositories regrading backend, JWT , Logics of
          different websites. Currently focused into Blockchain niche. Looking
          for collaborators to work on blockchain or solana projects.
        </p>
      </div>

      <br></br>
      <div className={styles.identity}>
        <div>
          <Image src="/me.png" alt="cr7" width={100} height={100} />
          <p>I&apos;m mostly online at X </p>
        </div>
        <div className={styles.pulseContainer}>
          <div className={styles.pulse}></div>
          <span className={styles.openForProjects}>Open for projects</span>
        </div>
      </div>

      <p className={styles.intro}>
        Here is my
        <Link
          href="https://ivory-colline-89.tiiny.site"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Resume{" "}
        </Link>
        , my DMs on{" "}
        <Link href="https://x.com/Unowmeno_7" target="_blank" rel="noreferrer">
          X (Twitter)
        </Link>{" "}
        are always open, feel free to reach out or drop an
        <Link
          href="mailto:bhagis052@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Email.
        </Link>
        <br />
        All of my projects are open sourced on{" "}
        <Link
          href="https://github.com/Vishalll07"
          target="_blank"
          rel="noreferrer"
        >
          GitHub.
        </Link>
      </p>

      <Footer />
    </div>
  );
}