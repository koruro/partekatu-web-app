import CategoryBox from "../../components/Categories/CategoryBox/CategoryBox";
import PageContainerBox from "../../components/Page/PageContainerBox/PageContainerBox";
import PartekatuReadSVG from "../../components/Shared/PartekatuReadSVG";
import { CategoriesEnum } from "../../types/categories";
import styles from "./styles.module.css";

const EuskeraCourseContainer = () => {
	return (
		<PageContainerBox breakLimit="lg">
			<div className={styles["euskera-course-container"]}>
				<section className={styles["euskera-course-container__welcome"]}>
					<div className={styles["euskera-course-container__welcome__image"]}>
						<PartekatuReadSVG />
					</div>
					<div className={styles["euskera-course-container__welcome__text"]}>
						<h2>¡Kaixo, lagun! 👋</h2>
						<p>
							<strong>
								¡Anda! ¡Un nuevo alumn@ para nuestro curso online de euskera!
							</strong>{" "}
							Somos Xabi y Ander, y estás en partekatu.com: nuestra web para
							aprender euskera ¿A que tiene buena pinta?
						</p>
						<p>
							<strong>
								Aquí podrás aprender euskera online gratis y a tu ritmo
							</strong>{" "}
							mediante nuestros artículos en los que explicamos el idioma desde
							0 de modo que hasta tus padres lo entenderían.
						</p>
						<p>
							Para eso no es que hagamos magia: simplemente explicamos los
							contenidos del euskera de <strong>forma cercana</strong> —¡Como si
							te conociéramos de toda la vida!— y con un montón de{" "}
							<strong>ejemplos</strong> e <strong>imágenes</strong>.
						</p>
					</div>
				</section>
				<section className={styles["euskera-course-container__main"]}>
					<h1>
						<span>El curso de euskera online, gratis y a tu manera</span>
					</h1>
					<p>
						Esto es sencillísimo: no tienes ni que registrarte para empezar con
						nuestro curso. Y es que, al fin y al cabo, todo Partekatu forma el
						curso de euskera, y{" "}
						<strong>tienes todas nuestras lecciones un poco más abajo</strong>{" "}
						👇.
					</p>
					<p>
						Son clases organizadas en <strong>3 grupos:</strong>
					</p>
					<ul>
						<li>
							<CategoryBox category={CategoriesEnum.GRAMAR} /> Aquí aprenderás
							la lógica gramática del euskera.
						</li>
						<li>
							<CategoryBox category={CategoriesEnum.VOCABULARY} /> Con estos
							artículos aprenderás nuevas palabras ¿Evidente, no?
						</li>
						<li>
							<CategoryBox category={CategoriesEnum.BLOG} /> Y con estos posts
							aprenderás sobre temas relacionados con el euskera que no entran
							en las anteriores categorías.
						</li>
					</ul>
					<p>
						Y los artículos de las 3 categorías tienen algo en común: todo son
						lecciones están escritas desde la cercanía y con mucho mimo… Además,
						cada semana creamos nuevos artículos que vamos añadiendo aquí.
					</p>
					<p>
						¡Así que, adelante! Dale caña. Y, como dirían por aquí: ¡Sumérgete
						en el euskera! O, mejor dicho 😉:
					</p>
				</section>
			</div>
		</PageContainerBox>
	);
};

export default EuskeraCourseContainer;
