import React from "react";
import Bolt from "../public/bolt.png";
import ProductTab from "./ProductTab";

const OurProducts = () => {
  return (
    <div id="OurProducts">
      <h2 className="text-xl font-semibold my-6 mb-10 ">
        Nasze produkty i usługi
      </h2>
      <div className="grid grid-cols-1 grid-flow-row-dense  md:grid-cols-2  grid-rows-3 gap-6">
        {/*<ProductTab*/}
        {/*  description={*/}
        {/*    "Wykorzystanie nowych technologii, IT, Fin-Tech: blockchain, kryptowaluty, analiza biznesowa, badania i rozwój, tokenizacja."*/}
        {/*  }*/}
        {/*  title={"Optymalizacja procesów i kosztów"}*/}
        {/*  image={"./bolt.svg"}*/}
        {/*/>*/}

        <ProductTab
          description={
            "Wykorzystanie nowych technologii, IT, Fin-Tech: blockchain, kryptowaluty, analiza biznesowa, badania i rozwój, tokenizacja."
          }
          title={"Optymalizacja procesów i kosztów"}
          image={"./carbon_tools-alt.svg"}
        />
        <ProductTab
          title={"Prowadzenie kampanii marketingowych"}
          description={
            "Google Ads, Facebook Ads, Linkedin Ads. Tworzenie oraz optymalizacja reklam i dostarczanie raportów efektów."
          }
          image={"./ad.svg"}
        />
        {/*<ProductTab*/}
        {/*  title={"Tworzenie projektów graficznych"}*/}
        {/*  description={"Logo, materiały reklamowe, UI"}*/}
        {/*  image={"./mdi_paint-outline.svg"}*/}
        {/*/>*/}
        <ProductTab
          title={"Tworzenie projektów graficznych"}
          description={"Logo, materiały reklamowe, UI"}
          image={"./mdi_paint-outline.svg"}
        />

        <ProductTab
          title={"Optymalizacja procesów"}
          description={
            "oraz kosztów z wykorzystaniem nowych technologii, IT, Fin-Tech: blockchain, kryptowaluty, analiza biznesowa, badania i rozwój, tokenizacja."
          }
          image={"./mdi_chart-finance.svg"}
        />
        <ProductTab
          title={"Pomoc prawna"}
          description={
            "Jeżeli chcesz utworzyć spółkę on-line bez wychodzenia z domu bez notariusza i zbędnych kosztów oferujemy usługę tworzenia szybkich spółek w systemie S24."
          }
          image={"./octicon_law-16.svg"}
        />
        <ProductTab
          title={"Projektowanie stron"}
          description={"oraz sklepów internetowych"}
          image={"./icon-park-outline_code-computer.svg"}
        />
      </div>
    </div>
  );
};

export default OurProducts;
