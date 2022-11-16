import React from "react";
import hero from "../styles/Hero.module.css";
import AnimatedText from "react-animated-text-content";
import { Fade } from "react-awesome-reveal";
import AboutUs from "./AboutUs";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={hero.main2}>
      <div className="md:container md:mx-auto px-4 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  h-full">
          <div className={"flex items-center h-full col-span-2 "}>
            <Fade cascade>
              <div>
                <h1 className="text-xl sm:text-xl2 md:text-xl3 font-bold  mb-4">
                  Twórz z Nami technologię w oparciu o innowacyjny system
                  ekonomiczny
                </h1>
                <p className="text-base sm:s ">
                  Dołącz do naszego community, które łączy biznes oraz
                  technologię, waluty fiat i krypto, starą oraz nową
                  technologię.
                </p>
                {/*<button className="mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">*/}
                {/*  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">*/}
                {/*    Porozmawiajmy o możliwościach*/}
                {/*  </span>*/}
                {/*</button>*/}
                <Link
                  href={"https://calendly.com/deeptechlabs"}
                  target="_blank"
                >
                  <button
                    type="button"
                    className=" mt-10 text-white rounded-none border-2 border-main bg-transparent hover:bg-main hover:text-black focus:ring-4 focus:ring-main font-medium  text-base px-5 py-2.5 mr-2 mb-2 px-8  focus:outline-none"
                  >
                    Porozmawiajmy o możliwościach
                  </button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
