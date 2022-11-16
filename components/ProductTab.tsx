import React from "react";
import FadeIn from "react-fade-in";
import Image from "next/image";

interface Data {
  title: string;
  description: string;
  image: string;
}

const ProductTab = (props: Data) => {
  return (
    <div className={" hover:text-black"}>
      <a
        href="#"
        className="flex flex-col items-center bg-transparent dark:bg-black  border shadow-md md:flex-row md:max-w-xl hover:border-main hover:text-black dark:border-gray-700 "
      >
        <Image
          height={"32"}
          width={"32"}
          className="mt-4 h-20 w-20 sm:h-22 sm:w-22 sm:p-5 sm:mt-0 sm:object-scale-down rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={`/${props.image}`}
          alt="ikona"
        />
        <div className="flex flex-col justify-between p-4 leading-normal hover:text-black">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {props.title}
          </h5>
          <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
            {props.description}
          </p>
        </div>
      </a>
    </div>
  );
};
// object-scale-down
export default ProductTab;
