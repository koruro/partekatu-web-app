/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Autocomplete from "../../../components/Article/InteractiveComponents/SurnameFinder/Autocomplete/Autocomplete";
import CustomInput from "../../../components/Article/InteractiveComponents/SurnameFinder/Input/CustomInput";
import EuskaltegiFillableCard from "../../../components/Euskaltegi/EuskaltegiFillableCard/EuskaltegiFillableCard";
import LoadingRing from "../../../components/Loading/Ring/LoadingRing";
import PageContainerBox from "../../../components/Page/PageContainerBox/PageContainerBox";
import { Euskaltegi } from "../../../models/euskaltegi/Euskaltegi";
import { TextMatch } from "../../../models/TextMatch";
import { euskaltegiRepository } from "../../../services/bootstrap";
import MyMap from "../EuskaltegisMap";
import styles from "./styles.module.css";

interface Props {
  euskaltegis: Euskaltegi[];
}

const EuskaltegiSearchContainer: React.FC<Props> = ({ euskaltegis }) => {
  const [typedSite, setTypedSite] = useState<string>("");
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
  const [matches, setMatches] = useState<TextMatch[] | undefined>(undefined);
  const [resultIsLoading, setResultIsLoading] = useState<boolean>(false);
  const [selectedEuskaltegi, setSelectedEuskaltegi] = useState<
    Euskaltegi | undefined
  >(undefined);
  const router = useRouter();

  useEffect(() => {
    if (!typedSite) return;
    euskaltegiRepository.getLocationMatches(typedSite).then((response) => {
      setMatches(response);
    });
  }, [typedSite]);

  const handleOnSubmit = (location: string) => {
    if (!location) return;

    setResultIsLoading(true);
    setShowAutoComplete(false);
    euskaltegiRepository
      .getLocationInfo(location)
      .then((locationInfo) => {
        if (locationInfo) {
          router.push(locationInfo.name.toLowerCase());
        } else {
          router.push(`c/${location.toLowerCase()}`);
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
              setShowAutoComplete(true);
              setTypedSite(value);
            }}
            onBlur={() => {
              setShowAutoComplete(false);
            }}
            onFocus={() => setShowAutoComplete(true)}
          />
          {showAutoComplete && (
            <Autocomplete
              matches={typedSite ? matches : undefined}
              onMatchClick={(match) => {
                handleOnSubmit(match.text);
              }}
            />
          )}
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
            onMarkerClick={(euskaltegi) => setSelectedEuskaltegi(euskaltegi)}
          ></MyMap>
        </div>
        <EuskaltegiFillableCard euskaltegi={selectedEuskaltegi} />
      </div>
    </PageContainerBox>
  );
};

export default EuskaltegiSearchContainer;
