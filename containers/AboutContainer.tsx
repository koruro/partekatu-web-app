import PageContainerBox from "../components/Page/PageContainerBox/PageContainerBox";
import AboutUsSvg from "../components/Shared/AboutUsSvg";

const AboutContainer = () => {
  return (
    <PageContainerBox breakLimit="md">
      <section
        className="article-content"
        style={{ marginTop: "5rem", fontSize: "1.12em" }}
      >
        <h1>Sobre nosotros</h1>
        <h2>Objetivo</h2>
        <p>
          <strong>
            Nuestro objetivo es simple: queremos que aprendas euskera online
            mediante nuestra web, seas quién seas y estés donde estés.
          </strong>
        </p>
        <p>
          Para eso creamos artículos escritos de forma amigable y entendible en
          los que explicamos contenidos del euskera de forma fácil, visual y
          gratuita 🤓.
        </p>
        <h2>Quiénes somos</h2>
        <p>
          <b>
            En <i>Partekatu</i> somos apasionad@s del euskera y la informática
            que queremos que aprender euskera esté al alcance de cualquiera.
          </b>
        </p>
        <p>
          Para ello, hemos estructurado <i>Partekatu</i> sobre <b>5 pilares</b>:
        </p>
        <p>
          Primero tenemos las 4 categorías de nuestros artículos:{" "}
          <a href="https://partekatu.com/categorias/gramatica">Gramática</a>,{" "}
          <a href="https://partekatu.com/categorias/vocabulario">Vocabulario</a>
          , <a href="https://partekatu.com/categorias/blog">Blog</a> y{" "}
          <a href="https://partekatu.com/categorias/cultura-vasca">Cultura</a>.
        </p>
        <p>
          En cada una de dichas categorías encontrarás artículos con los que
          podrás aprender sobre el euskera y la cultura que lo rodea.
        </p>
        <p>
          Nuestra recomendación: si eres un apasionad@ del euskera,{" "}
          <b>¡Piérdete en dichas categorías y empápate sobre el euskera!</b>
        </p>
        <p>
          Encontrarás artículos variados con los que te aseguramos que
          aprenderás muchísimo sobre la lengua vasca.
        </p>
        <p>
          Y, por otra parte,{" "}
          <b>
            el último pilar de <i>Partekatu</i> es nuestro{" "}
            <a href="https://partekatu.com/curso-euskera-online">
              curso online de euskera básico.
            </a>
          </b>
        </p>
        <p>
          En dicho curso{" "}
          <b>
            te enseñaremos las bases del euskera desde 0 de forma rápida
            mediante vídeos, infografías y ejercicios interactivos.
          </b>
        </p>
        <p>
          Por lo que, vaya, en resumen: <i>Partekatu</i> es una plaza digital
          que hemos creado al euskera. Por algo <i>partekatu</i> significa
          “compartir” en euskera 😉…
        </p>
        <p>
          <b>¡Así que navega en la web, disfruta y aprende euskera 🥳!</b>
        </p>
      </section>
    </PageContainerBox>
  );
};

export default AboutContainer;
