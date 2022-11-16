import React from "react";
import Image from "next/image";
import Link from "next/link";

const CreateBusiness = () => {
  return (
    <div id={"YourIdea"} className="grid flex grid-cols-1  sm:grid-cols-2">
      <div className={"flex items-center order-last sm:order-first"}>
        <div>
          <h2 className="text-x font-semibold mb-2">
            Zrealizuj z nami swój pomysł na biznes
          </h2>
          <p>
            Masz pomysł na biznes i nie wiesz co dalej? Dołącz do community
            startupowego i zdobądź z nami kapitał na rozwój swojego biznesu.
            Umów się z nami na spotkanie i zaczynajmy już teraz
          </p>
          <Link href={"https://calendly.com/deeptechlabs"} target="_blank">
            <button
              type="button"
              className="text-white mt-10 rounded-none border-2 border-main bg-transparent hover:bg-main hover:text-black focus:ring-4 focus:ring-main font-medium  text-base px-5 py-2.5 mr-2 mb-2 px-8  focus:outline-none"
            >
              Umów się na spotkanie
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-6 sm:mb-0">
        <Image src={"/dis2.png"} alt={"zdjecie"} width={"590"} height={"400"} />
      </div>
    </div>
  );
};
// className={"col-span-2"}
export default CreateBusiness;
