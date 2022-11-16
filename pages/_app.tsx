import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, Footer } from "flowbite-react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { PopupWidget } from "react-calendly";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

export default function App({ Component, pageProps }: AppProps) {
  const [menuToggle, setMenuToggle] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    setTheme("dark");
    localStorage.theme = "dark";
  }, []);
  // const scrollWithOffset = (
  //   el: React.UIEvent<HTMLAnchorElement>,
  //   offset: number
  // ) => {
  //   const elementPosition = el.offsetTop - offset;
  //   window.scroll({
  //     top: elementPosition,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };
  // @ts-ignore
  return (
    <>
      <>
        <nav className="sticky top-0 bg-black border-gray-200 sm:px-4 py-8 dark:bg-black z-50">
          <div className="container px-5 sm:px-0 flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center">
              <Image
                src="/DTL_Logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
                width={"180"}
                height={"200"}
              />
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-main dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`${
                !menuToggle && "hidden"
              }  w-full md:block md:w-auto bg-black hover:bg-black mt-4`}
              id="navbar-default"
            >
              <ul className="flex flex-col text-white  border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-black md:dark:bg-black dark:border-gray-700">
                {/*<li>*/}
                {/*  <a*/}
                {/*    href="#"*/}
                {/*    className="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"*/}
                {/*    aria-current="page"*/}
                {/*  >*/}
                {/*    Home*/}
                {/*  </a>*/}
                {/*</li>*/}
                <li>
                  <Link
                    className="block py-2 pr-4 pl-3 text-gray-100 rounded hover:main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-main dark:hover:text-black md:dark:hover:bg-transparent"
                    href={"#YourIdea"}
                    scroll={true}
                    // onClick={(el) => scrollWidthOffset(el)}
                    // onScroll={(el) => scrollWithOffset(el, 350)}
                  >
                    Twój pomysł
                  </Link>
                </li>
                <li>
                  <Link
                    href="#OurProducts"
                    className="block py-2 pr-4 pl-3 text-gray-100 rounded hover:bg-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Nasze produkty
                  </Link>
                </li>
                <li>
                  <Link
                    href="#AboutUs"
                    className="block py-2 pr-4 pl-3 text-gray-100 rounded hover:bg-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Contact"
                    className="block py-2 pr-4 pl-3 text-gray-100 rounded hover:bg-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*<Navbar*/}
        {/*    fluid={false} rounded={false} className={styles.xd}*/}
        {/*>*/}
        {/*  <Navbar.Brand href="/DTL_Logo.svg">*/}
        {/*    <img*/}
        {/*        src="/DTL_Logo.svg"*/}
        {/*        className="mr-3 h-6 sm:h-9"*/}
        {/*        alt="deeptechlabs"/>*/}
        {/*    <span className="self-center whitespace-nowrap text-xl font-semibold text-white-100">*/}
        {/*          </span>*/}
        {/*  </Navbar.Brand>*/}
        {/*  <Navbar.Toggle/>*/}
        {/*  <Navbar.Collapse>*/}
        {/*    <Navbar.Link*/}
        {/*        href="/home"*/}
        {/*    >*/}
        {/*      Home*/}
        {/*    </Navbar.Link>*/}
        {/*    <Navbar.Link href="/navbars">*/}
        {/*      About*/}
        {/*    </Navbar.Link>*/}
        {/*    <Navbar.Link href="/navbars">*/}
        {/*      Services*/}
        {/*    </Navbar.Link>*/}
        {/*    <Navbar.Link href="/navbars">*/}
        {/*      Pricing*/}
        {/*    </Navbar.Link>*/}
        {/*    <Navbar.Link href="/navbars">*/}
        {/*      Contact*/}
        {/*    </Navbar.Link>*/}
        {/*  </Navbar.Collapse>*/}
        {/*</Navbar>*/}
        <Component {...pageProps} />
      </>

      <footer className="container mx-auto p-4 bg-black container-md  md:flex md:items-center md:justify-between md:p-6 dark:bg-black">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            deeptechlabs™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
      {/*<link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />*/}
      {/*<script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js" />*/}
    </>
  );
}
