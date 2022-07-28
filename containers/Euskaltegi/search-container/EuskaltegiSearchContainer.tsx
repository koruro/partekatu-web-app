import { useEffect, useState } from "react";
import Autocomplete from "../../../components/Article/InteractiveComponents/SurnameFinder/Autocomplete/Autocomplete";
import CustomInput from "../../../components/Article/InteractiveComponents/SurnameFinder/Input/CustomInput";
import PageContainerBox from "../../../components/Page/PageContainerBox/PageContainerBox";
import { Location } from "../../../models/euskaltegi/Euskaltegi";
import { TextMatch } from "../../../models/TextMatch";
import { euskaltegiRepository } from "../../../services/bootstrap";
import LocationMap from "../LocationMap";
import MyMap from "../MyMap";
import styles from "./styles.module.css";

interface Props {
  initialLocations: Location[];
}

const EuskaltegiSearchContainer: React.FC<Props> = ({ initialLocations }) => {
  const [typedSite, setTypedSite] = useState<string>("");
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
  const [matches, setMatches] = useState<TextMatch[] | undefined>(undefined);

  useEffect(() => {
    euskaltegiRepository.getLocationMatches(typedSite).then((response) => {
      setMatches(response);
    });
  }, [typedSite]);

  return (
    <PageContainerBox>
      <div className={styles["euskaltegis-search-container"]}>
        <h1>Encuentra tu Euskaltegi</h1>
        <p className={styles["euskaltegis-search-container__copy-text"]}>
          Introduce un lugar y nosotros te buscaremos los euskaltegis mas
          cercanos! 😉
        </p>
        <form
          style={{
            margin: "3rem 0",
            position: "relative",
          }}
        >
          <CustomInput
            placeholder="🏫  Introduce aquí el lugar..."
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
                console.log(match);
              }}
            />
          )}
        </form>
        <p
          style={{
            fontSize: "1.1rem",
            padding: "0 1rem",
            fontWeight: "bold",
          }}
        >
          🗺️ O encuentra tu sitio en el mapa
        </p>
        <div style={{ height: "min(600px, 70vh)", marginBottom: "2rem" }}>
          <LocationMap locations={initialLocations}></LocationMap>
        </div>
      </div>
    </PageContainerBox>
  );
};

export default EuskaltegiSearchContainer;
