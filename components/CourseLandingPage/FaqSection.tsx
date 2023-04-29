import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";
import styles from "./styles.module.css";

const FaqSection = () => {
  return (
    <section>
      <PageContainerBox breakLimit="xl">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
            Preguntas frecuentes
          </h2>
          <ul className={styles["faq__questions"]}>
            <li>
              <span>¿En cuánto tiempo podré finalizar el curso?</span>
              <p>
                El curso tiene más de 2 horas de vídeos y ejercicios. Calculamos
                que dedicándole unas 4 horas a la semana es posible terminarlo
                en 2 o 3 semanas.
              </p>
            </li>
            <li>
              <span>¿Conseguiré el nivel A1 de euskera con el curso?</span>
              <p>
                Este curso te dará los pilares principales para que entiendas el
                euskera y te puedas comunicar en el menor tiempo posible. Es por
                eso que no adquirirás el nivel A1 de la lengua vasca.
              </p>
              <p>
                Eso sí, obtendrás una sólida base para poder seguir tu camino
                con el euskera.
              </p>
            </li>
            <li>
              <span>¿Ofrecéis soporte para solucionar dudas?</span>
              <p>
                El curso está pensado para ser breve, conciso y entendible. Es
                por eso que en los propios vídeos nos anticipamos a las dudas
                que puedas tener y te damos enlaces para profundizar en caso de
                duda. Por eso no ofrecemos soporte por mail para aclarar dudas.
              </p>
            </li>
          </ul>
        </div>
      </PageContainerBox>
    </section>
  );
};

export default FaqSection;
