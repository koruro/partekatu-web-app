import {
  SurnameAnalytics,
  SurnameData,
} from "../../../../../models/surname/SurnameMatch";
import { capitalize } from "../../../../../utils/capitalize";
import { isNullOrUndefined } from "../../../../../utils/isNullOrUndefined";
import SurnameAsset from "../SurnameAsset";
import AnalyticsBox from "./AnalyticsBox";
import AnalyticsMissing from "./AnalyticsMissing";
import styles from "./styles.module.css";

interface Props {
  data: SurnameData;
  enteredSurname: string;
}

const loadDocumentReferenceText = (isBasque: boolean) => {
  if (isBasque) {
    return (
      <>
        según el documento{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.euskaltzaindia.eus/dok/eaeb/eoda/deiturak.pdf"
        >
          “Euskal Deiturak”
        </a>
        , publicado por la Real Academia de la Lengua Vasca - Euskaltzaindia en
        2005, que emplea{" "}
        <a
          href="https://www.euskaltzaindia.eus/dok/jagonet/DeituraIzendegia_eu.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          los criterios listados aquí
        </a>{" "}
        para determinarlo.
      </>
    );
  }

  return (
    <>
      Dicho registro se basa en el documento{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.euskaltzaindia.eus/dok/eaeb/eoda/deiturak.pdf"
      >
        “Euskal Deiturak”
      </a>
      , publicado por la Real Academia de la Lengua Vasca - Euskaltzaindia en
      2005, que emplea{" "}
      <a
        href="https://www.euskaltzaindia.eus/dok/jagonet/DeituraIzendegia_eu.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        los criterios listados aquí
      </a>{" "}
      para determinarlo.
    </>
  );
};

const loadText = (data: SurnameData) => {
  const formatedSurname = capitalize(data.surname);
  if (!data.isBasque) {
    return (
      <section>
        <p className={styles["title"]}>
          El apellido <span>{formatedSurname}</span> no está en nuestra base de
          datos de apellidos con origen vasco.
        </p>
      </section>
    );
  }
  if (data.isAcademic) {
    return (
      <section>
        <p className={styles["title"]}>
          El apellido <span>{formatedSurname}</span> es vasco,
        </p>
      </section>
    );
  }
  return (
    <section>
      <p className={styles["title"]}>
        El apellido <span>{formatedSurname}</span> es de origen vasco.
      </p>
      {data.relations.length <= 1 ? (
        <p className={styles["correction"]}>
          Sin embargo, <i>Euskaltzaindia</i> recomienda{" "}
          <i>
            <b>{data.relations[0]}</b>
          </i>{" "}
          como forma académica correcta del apellido con grafía en euskera.
        </p>
      ) : (
        <>
          <p className={styles["correction"]}>
            Sin embargo, <i>Euskaltzaindia</i> recomienda estos nombres como
            formas académicas correctas del apellido con grafía en euskera.
          </p>
          <div className={styles["relations"]}>
            <ul>
              {data.relations.map((relation, index) => (
                <li key={index}>{relation}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

const getAnalytics = (data: SurnameData): SurnameAnalytics => {
  return data.analytics;
};

const SurnameAnalysis: React.FC<Props> = ({ data }) => {
  const analytics = getAnalytics(data);
  const formatedSurname = capitalize(data.surname);
  return (
    <div>
      <div className={styles["main-title"]}>
        <SurnameAsset />
        {loadText(data)}
      </div>
      <p className={styles["reference"]}>
        {loadDocumentReferenceText(data.isBasque)}
      </p>

      {data.isBasque && (
        <>
          {isNullOrUndefined(analytics.firstOnly) &&
          isNullOrUndefined(analytics.secondOnly) &&
          isNullOrUndefined(analytics.both) ? (
            <AnalyticsMissing surname={formatedSurname} />
          ) : (
            <>
              <p className={styles["in-addition"]}>Además, en España...</p>
              <div className={styles["analytics"]}>
                <AnalyticsBox
                  surname={formatedSurname}
                  type="first"
                  data={data.analytics.firstOnly!}
                />
                <AnalyticsBox
                  surname={formatedSurname}
                  type="second"
                  data={data.analytics.secondOnly!}
                />
                <AnalyticsBox
                  surname={formatedSurname}
                  type="both"
                  data={data.analytics.both!}
                />
              </div>
              <p className={styles["reference"]}>
                Según las{" "}
                <a href="https://www.ine.es/widgets/nombApell/index.shtml">
                  Estadísticas del Padrón Continuo del INE
                </a>{" "}
                a fecha 01/01/2020.
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SurnameAnalysis;
