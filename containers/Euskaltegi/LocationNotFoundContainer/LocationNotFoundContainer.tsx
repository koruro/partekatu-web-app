/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import PageContainerBox from "../../../components/Page/PageContainerBox/PageContainerBox";

interface Props {
  searchedLocation: string;
}

const LocationNotFoundContainer: React.FC<Props> = ({ searchedLocation }) => {
  return (
    <PageContainerBox breakLimit="xl">
      <section
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "3rem",
          fontSize: "1.2rem",
        }}
      >
        <h1 style={{ fontSize: "2.6rem" }}>
          🏫 Ups... Aquí no hay ningún euskaltegi
        </h1>
        <p>
          Parece que no hemos podido encontrar euskaltegis en el sitio{" "}
          <b>
            <i>{searchedLocation}</i>
          </b>
        </p>
        <p>
          Por favor, revisa si has escrito bien el lugar y vuelve a intentarlo
          en <a href="/euskaltegi/buscador">el buscador</a>!
        </p>
      </section>
    </PageContainerBox>
  );
};

export default LocationNotFoundContainer;
