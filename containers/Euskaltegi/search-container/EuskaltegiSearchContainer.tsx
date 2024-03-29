/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import CustomInput from "../../../components/Article/InteractiveComponents/SurnameFinder/Input/CustomInput";
import EuskaltegiFillableCard from "../../../components/Euskaltegi/EuskaltegiFillableCard/EuskaltegiFillableCard";
import LoadingRing from "../../../components/Loading/Ring/LoadingRing";
import PageContainerBox from "../../../components/Page/PageContainerBox/PageContainerBox";
import {
  Euskaltegi,
  getParsedLocationUrlName,
  Location,
} from "../../../models/euskaltegi/Euskaltegi";
import { euskaltegiRepository } from "../../../services/bootstrap";
import MyMap from "../EuskaltegisMap";
import styles from "./styles.module.css";

interface Props {
  euskaltegis: Euskaltegi[];
  locations: Location[];
}

const EuskaltegiSearchContainer: React.FC<Props> = ({
  euskaltegis,
  locations,
}) => {
  const [typedSite, setTypedSite] = useState<string>("");
  const [resultIsLoading, setResultIsLoading] = useState<boolean>(false);
  const [selectedEuskaltegi, setSelectedEuskaltegi] = useState<
    Euskaltegi | undefined
  >(undefined);
  const router = useRouter();

  const handleOnSubmit = (location: string) => {
    if (!location) return;
    const cleanedLocation = location.trim();

    setResultIsLoading(true);
    euskaltegiRepository
      .getLocationInfo(cleanedLocation)
      .then((locationInfo) => {
        if (locationInfo && locationInfo.toIndex) {
          router.push(getParsedLocationUrlName(locationInfo.name));
        } else {
          router.push(`c/${getParsedLocationUrlName(cleanedLocation)}`);
        }
      })
      .finally(() => {
        setResultIsLoading(false);
      });
  };

  const showAnalytics = () => {
    if (resultIsLoading)
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingRing />
        </div>
      );
    return null;
  };

  return (
    <PageContainerBox>
      <div className={styles["euskaltegis-search-container__women_images"]}>
        <img src="/woman_drawing_2.png" alt="women drawing"></img>
        <img src="/woman_drawing_1.png" alt="women drawing"></img>
      </div>
      <div className={styles["euskaltegis-search-container"]}>
        <h1>Encuentra tu euskaltegi</h1>
        <p className={styles["euskaltegis-search-container__copy-text"]}>
          ¡Introduce tu ubicación y nosotros te buscaremos los euskaltegis más
          cercanos! 😉
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleOnSubmit(typedSite);
          }}
        >
          <CustomInput
            placeholder="🏫  Introduce el lugar. ej. Bilbao, Donosti, Vitoria-Gasteiz..."
            value={typedSite}
            onValueChange={(value) => {
              setTypedSite(value);
            }}
          />
        </form>
        {showAnalytics()}
        <p
          style={{
            fontSize: "1.1rem",
            padding: "0 1rem",
            fontWeight: "bold",
          }}
        >
          🗺️ O encuentra tu euskaltegi en el mapa
        </p>
        <div style={{ height: "min(600px, 70vh)", marginBottom: "2rem" }}>
          <MyMap
            euskaltegis={euskaltegis}
            onMarkerClick={(euskaltegi) => {
              setSelectedEuskaltegi(euskaltegi);
              router.push("#card");
            }}
          ></MyMap>
        </div>
        <EuskaltegiFillableCard euskaltegi={selectedEuskaltegi} />
      </div>
      <section
        style={{
          marginTop: "2rem",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "1.5em",
            fontWeight: "bold",
            backgroundColor: "var(--primary)",
            padding: "0.3rem 0.7rem",
            display: "inline-block",
            marginBottom: "2rem",
          }}
        >
          ¡Aquí tienes algunas de las ubicaciones!
        </h2>
        <div
          style={{
            padding: "0 1rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {locations.map((l, i) => (
            <a
              key={i}
              href={getParsedLocationUrlName(l.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{l.name}</span>
            </a>
          ))}
        </div>
      </section>
    </PageContainerBox>
  );
};

export default EuskaltegiSearchContainer;
