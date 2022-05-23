import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  SurnameData,
  SurnameMatch,
} from "../../../../models/surname/SurnameMatch";
import { surnameRepository } from "../../../../services/bootstrap";
import LoadingRing from "../../../Loading/Ring/LoadingRing";
import Autocomplete from "./Autocomplete/Autocomplete";
import CustomInput from "./Input/CustomInput";
import styles from "./styles.module.css";
import SurnameAnalysis from "./SurnameAnalysis/SurnameAnalysis";
import SurnameSuggestions from "./SurnameSuggestions/SurnameSuggestions";

const SurnameFinder: React.FC = () => {
  const [typedSurname, setTypedSurname] = useState<string>("");
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
  const [result, setResult] = useState<SurnameData | null>(null);
  const [resultIsLoading, setResultIsLoading] = useState<boolean>(false);
  const [matches, setMatches] = useState<SurnameMatch[] | undefined>(undefined);

  const router = useRouter();

  const handleOnSubmit = (surname: string) => {
    if (!surname) return;

    setResultIsLoading(true);
    setShowAutoComplete(false);
    surnameRepository
      .getSurnameData(surname)
      .then((result) => {
        setResult(result);
      })
      .catch((e) => setResult(null))
      .finally(() => {
        setResultIsLoading(false);
      });
  };

  useEffect(() => {
    const querySurname = router.query.surname;
    if (!querySurname) return;

    setTypedSurname(querySurname as string);
    handleOnSubmit(querySurname as string);
  }, []);

  useEffect(() => {
    surnameRepository.getSimilarSurnames(typedSurname).then((response) => {
      setMatches(response);
    });
  }, [typedSurname]);

  const showAnalytics = () => {
    if (resultIsLoading)
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingRing />
        </div>
      );
    if (!result) return null;

    return (
      <>
        <SurnameAnalysis enteredSurname={typedSurname} data={result} />
        <SurnameSuggestions
          hrefFactory={(suggestion) =>
            `/${router.query.slug}?surname=${suggestion.surname}`
          }
          suggestions={result?.suggestions}
        />
      </>
    );
  };

  return (
    <div className={classNames(styles["surname-finder"], "elevate-2")}>
      <p className={styles["surname-finder__preamble"]}>
        <b>Introduce aquí</b> tu apellido y te diremos si es de{" "}
        <b>origen vasco</b> 😉:
      </p>
      <form
        className={styles["surname-finder__searchform"]}
        onSubmit={(e) => {
          e.preventDefault();

          handleOnSubmit(typedSurname);
        }}
      >
        <CustomInput
          placeholder="Busca un apellido..."
          value={typedSurname}
          onValueChange={(value) => {
            setShowAutoComplete(true);
            setTypedSurname(value);
          }}
          onBlur={() => {
            setShowAutoComplete(false);
          }}
          onFocus={() => setShowAutoComplete(true)}
        />
        {showAutoComplete && (
          <Autocomplete
            matches={matches?.map((a) => ({ name: a.surname }))}
            onMatchClick={(match) => {
              setTypedSurname(match.name);
              handleOnSubmit(match.name);
            }}
          />
        )}
        {showAnalytics()}
      </form>
    </div>
  );
};

export default SurnameFinder;
