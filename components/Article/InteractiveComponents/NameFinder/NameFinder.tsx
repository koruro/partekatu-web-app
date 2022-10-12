import { useEffect, useState } from "react";
import {
  getNameOriginText,
  getOriginAbreviation,
  isNameTranslationDataError,
  NameOrigin,
  NameTranslationDataResponse,
} from "../../../../models/name-translations/NameMatch";
import { TextMatch } from "../../../../models/TextMatch";
import { nameTranslationsRepository } from "../../../../services/bootstrap";
import LoadingRing from "../../../Loading/Ring/LoadingRing";
import BlankCard from "../../../Shared/BlankCard/BlankCard";
import Autocomplete from "../SurnameFinder/Autocomplete/Autocomplete";
import styles from "./styles.module.css";
import { capitalize } from "../../../../utils/capitalize";
import NameInput from "./NameInput/NameInput";
import { switchOrigin } from "./utils";

const getMissingNameTranslationText = (name: string, origin: NameOrigin) => (
  <section>
    <p
      style={{
        fontSize: "1.2rem",
        textAlign: "center",
        marginInline: "auto",
      }}
      className={styles["title"]}
    >
      ¡Vaya 🤷‍♂️! No tenemos ningún equivalente en{" "}
      <b>{getNameOriginText(switchOrigin(origin))}</b> del nombre <b>{name}</b>
    </p>
  </section>
);

const NameFinder: React.FC = () => {
  const [typedName, setTypedName] = useState<string>("");
  const [origin, setOrigin] = useState<NameOrigin>(NameOrigin.Spanish);
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
  const [result, setResult] = useState<
    NameTranslationDataResponse | undefined
  >();
  const [resultIsLoading, setResultIsLoading] = useState<boolean>(false);
  const [matches, setMatches] = useState<TextMatch[] | undefined>(undefined);

  const handleOnSubmit = (name: string) => {
    if (!name) return;

    setResultIsLoading(true);
    setShowAutoComplete(false);
    nameTranslationsRepository
      .getNameData(origin, name)
      .then((result) => {
        setResult(result);
      })
      .catch(() => setResult(undefined))
      .finally(() => {
        setResultIsLoading(false);
      });
  };

  useEffect(() => {
    setMatches([]);
    setResult(undefined);
    setTypedName("");
  }, [origin]);

  useEffect(() => {
    if (typedName === "") return;
    nameTranslationsRepository
      .getSimilarNames(origin, switchOrigin(origin), typedName)
      .then((response) => {
        setMatches(
          response.map((r) => ({ similarity: r.similarity, text: r.name }))
        );
      });
  }, [typedName, origin]);

  const showAnalytics = () => {
    if (resultIsLoading)
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingRing />
        </div>
      );

    if (!result) return null;
    if (isNameTranslationDataError(result))
      return getMissingNameTranslationText(typedName, origin);

    const translationOrigin = switchOrigin(result.origin);
    const translations = result.translations.filter(
      (t) => t.origin === translationOrigin
    );

    if (translations.length <= 0) {
      return getMissingNameTranslationText(result.name, result.origin);
    }

    return (
      <section className={styles["name-finder__analytics"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul>
            {translations.map((t, i) => (
              <li key={i}>
                <span
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  {t.name}
                </span>
                <span>({getOriginAbreviation(t.origin)})</span>
              </li>
            ))}
          </ul>
        </div>
        {/* <p className={styles["name-finder__reference"]}>
          Dicho registro se basa en el documento{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.euskaltzaindia.eus/dok/eaeb/eoda/deiturak.pdf"
          >
            “Euskal Deiturak”
          </a>
          , publicado por la Real Academia de la Lengua Vasca - Euskaltzaindia
          en 2005, que emplea{" "}
          <a
            href="https://www.euskaltzaindia.eus/dok/jagonet/DeituraIzendegia_eu.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            los criterios listados aquí
          </a>{" "}
          para determinarlo.
        </p> */}
      </section>
    );
  };

  return (
    <BlankCard className={styles["name-finder"]} rounded="l">
      <p className={styles["name-finder__preamble"]}>
        <b>Introduce aquí</b> un nombre de persona en{" "}
        <b>{capitalize(getNameOriginText(origin))}</b> y te diremos cuál es su
        grafía en <b>{capitalize(getNameOriginText(switchOrigin(origin)))}</b>{" "}
        😉:
      </p>
      <form
        className={styles["name-finder__searchform"]}
        onSubmit={(e) => {
          e.preventDefault();

          handleOnSubmit(typedName);
        }}
      >
        <NameInput
          placeholder="Introduce un nombre..."
          origin={origin}
          value={typedName}
          onSwitch={() => setOrigin(switchOrigin)}
          onValueChange={(value) => {
            setShowAutoComplete(true);
            setTypedName(value);
          }}
          onBlur={() => {
            setShowAutoComplete(false);
          }}
          onFocus={() => setShowAutoComplete(true)}
        />
        {showAutoComplete && (
          <Autocomplete
            matches={matches?.map((a) => ({
              text: a.text,
              similarity: a.similarity,
            }))}
            onMatchClick={(match) => {
              setTypedName(match.text);
              handleOnSubmit(match.text);
            }}
          />
        )}
        <div style={{ marginTop: "1rem" }}>{showAnalytics()}</div>
      </form>
    </BlankCard>
  );
};

export default NameFinder;
