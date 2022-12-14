import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Alert } from "flowbite-react";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar"
import { Navbar } from "flowbite-react";
import Logo from "../assets/DTL_Logo.png";
import Hero from "../components/Hero";
import React from "react";
import AnimatedText from "react-animated-text-content";
import AboutUs from "../components/AboutUs";
import OurProducts from "../components/OurProducts";
import Contact from "../components/Contact";
import Reveal, { Fade, Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import CreateBusiness from "../components/CreateBusiness";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const customAnimation = keyframes`
      from {
        opacity: 0;
        transform: translate3d(-200px, -100px, 0);
      }

      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `;
  return (
    <div className={styles.container}>
      <Head>
        <title>Deeptechlabs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/sygnet.svg" />
      </Head>
      <Hero />
      <div className="container mx-auto px-4 flex justify-center flex-col">
        {/*<div className="my-12 sm:my-24" />*/}
        <div className="my-12 sm:my-18" />
        <Fade>
          <CreateBusiness />
        </Fade>
        <div className="my-12 sm:my-18" />
        <Fade>
          <OurProducts />
        </Fade>
        <div className="my-12 sm:my-18" />
        <AboutUs />
        <div className="my-12 sm:my-18" />
        <Contact />
      </div>
    </div>
  );
}
