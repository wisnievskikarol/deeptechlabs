import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      id={"AboutUs"}
      className={"grid flex grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 "}
    >
      <div>
        <h2 className="text-xl  font-semibold my-6 ">O nas</h2>
        <Image
          width={500}
          height={400}
          className="w-full"
          src="/us.png"
          alt={"nasz zespol"}
        />
      </div>
      <div className="flex items-center ">
        <div>
          <h2 className="text-x font-semibold mb-2">Kim jesteśmy?</h2>
          <p>
            Zespołem działającym interdyscyplinarne. Realizujemy projekty deep
            tech działając na styku takich branż jak: AI, blockchain, neurotech,
            biotech, psychologia, prawo, zarządzanie i współpracując z osobami z
            różnych odnóg biznesowych. Zajmując się poszukiwaniem kapitału na
            innowacje, gromadzimy społeczność wokół nowych technologii i
            jesteśmy otwarci do współpracy z innowacyjnymi projektami. Jeżeli
            chcesz zrealizować swój pomysł z grupą doświadczonych osób, a nie
            wiesz jak się za to zabrać, umów się z nami na spotkanie i
            porozmawiajmy o możliwościach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
