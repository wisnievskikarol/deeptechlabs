import React from "react";

const Contact = () => {
  return (
    <div id={"Contact"}>
      <h2 className="text-xl font-semibold  mb-4 ">Kontakt:</h2>
      <p className="text-base sm:text-xl2 font-semibold hover:text-main">
        <a className={"underline "} href="mailto: deeptechlab@gmail.com">
          kontakt@deeptechlabs.com
        </a>
      </p>
      <p className="text-xl2  font-semibold hover:text-main">+48 539 700 186</p>
    </div>
  );
};

export default Contact;
