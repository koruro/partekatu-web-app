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
                El curso tiene más de 2 horas de vídeos y, por otra parte,
                ejercicios. Calculamos que dedicándole unas 4 horas a la semana
                es posible terminarlo en 2 o 3 semanas.
              </p>
            </li>
            <li>
              <span>¿Conseguiré el nivel A1 de euskera con el curso?</span>
              <p>
                Este curso te dará las claves principales para que entiendas el
                euskera y te puedas comunicar en el menor tiempo posible. Es por
                eso que no adquirirás el nivel A1 de la lengua vasca. Ahora,
                obtendrás una sólida y útil base para poder seguir tu camino con
                el euskera.
              </p>
            </li>
            <li>
              <span>¿Ofrecéis soporte para solucionar dudas?</span>
              <p>
                El curso está pensado para ser breve, conciso y entendible. En
                los propios vídeos nos anticipamos a las dudas que puedas tener
                y te damos enlaces para profundizar en caso de duda. Por eso no
                ofrecemos soporte por mail para aclarar dudas.
              </p>
            </li>
            <li>
              <span>
                ¿Y si no puedo permitirme el curso y quiero aprender euskera
                gratis qué puedo hacer?
              </span>
              <p>
                Creemos que poder estudiar euskera online debe estar al alcance
                de cualquiera. Y por esa razón también puedes aprender euskera
                de forma libre con los numerosos artículos educativos de nuestra
                web. No obstante, en dichos artículos no tendrás una progresión
                pensada para aprender euskera desde 0, ni vídeos, ni ejercicios.
              </p>
            </li>
          </ul>
        </div>
      </PageContainerBox>
    </section>
  );
};

export default FaqSection;
