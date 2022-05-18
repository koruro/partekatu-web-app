import classNames from "classnames";
import ArticleList from "../../components/Articles/List/ArticlesList";
import CategoryBox from "../../components/Categories/CategoryBox/CategoryBox";
import PageContainerBox from "../../components/Page/PageContainerBox/PageContainerBox";
import PartekatuReadSVG from "../../components/Shared/PartekatuReadSVG";
import { Article } from "../../models/Article";
import { CategoriesEnum } from "../../types/categories";
import { BiBookHeart } from "react-icons/bi";
import { FaCat, FaPenAlt } from "react-icons/fa";
import styles from "./styles.module.css";
import LandingArticleList from "../../components/Articles/LandingArticleList/LandingArticleList";

interface Props {
	articles: Record<CategoriesEnum, Article[]>;
}

const iconSize = "35px";

const EuskeraCourseContainer: React.FC<Props> = ({ articles }) => {
	return (
		<PageContainerBox breakLimit="xl">
			<div className={styles["euskera-course-container"]}>
				<section className={styles["euskera-course-container__welcome"]}>
					<div className={styles["euskera-course-container__welcome__image"]}>
						<PartekatuReadSVG />
					</div>
					<div
						className={classNames(
							styles["euskera-course-container__welcome__text"],
							"elevate-2"
						)}
					>
						<span
							className={
								styles["euskera-course-container__welcome__text__title"]
							}
						>
							<span>Kaixo, lagun!</span> <div className="wave">👋</div>
						</span>
						<p>
							<strong>
								¡Anda! ¡Un nuevo alumn@ para nuestro curso online de euskera!
							</strong>{" "}
							Somos Xabi y Ander, y estás en <i>partekatu.com</i>: nuestra web
							para aprender euskera ¿A que tiene buena pinta?
						</p>
						<p>
							<strong>
								Aquí podrás aprender euskera online, gratis y a tu ritmo
							</strong>{" "}
							mediante nuestros artículos en los que explicamos el idioma desde
							0 de modo que cualquiera lo entendería.
						</p>
						<p>
							Para eso no es que hagamos magia: simplemente explicamos los
							contenidos del euskera de <strong>forma cercana</strong> —¡Como si
							te conociéramos de toda la vida!— y con un montón de{" "}
							<strong>ejemplos</strong> e <strong>imágenes</strong>.
						</p>
					</div>
				</section>
				<PageContainerBox breakLimit="lg">
					<section className={styles["euskera-course-container__main"]}>
						<h1>
							<span>El curso de euskera online, gratis y a tu manera</span>
						</h1>
						<p>
							Esto es sencillísimo: no tienes ni que registrarte para empezar
							con nuestro curso. Y es que, al fin y al cabo, todo{" "}
							<i>Partekatu</i> forma el curso de euskera, y{" "}
							<strong>tienes todas nuestras lecciones un poco más abajo</strong>
							.
							<div
								className={classNames(
									styles["euskera-course-container__main__down-button"],
									"slide-down"
								)}
							>
								<a href="#articulos">
									<span>👇</span>
								</a>
							</div>
						</p>
						<p>
							Son clases organizadas en <strong>3 grupos:</strong>
						</p>
						<div
							className={
								styles["euskera-course-container__main__category-grid"]
							}
						>
							<div
								className={classNames(
									styles["euskera-course-container__main__category-box"],
									"gramar"
								)}
								style={{ background: "var(--gramar-gradient)" }}
							>
								<span
									className={
										styles[
											"euskera-course-container__main__category-box__title"
										]
									}
								>
									Gramática
								</span>
								<p>Aquí aprenderás la lógica gramática del euskera.</p>
								<p
									className={
										styles["euskera-course-container__main__category-box__icon"]
									}
								>
									<FaPenAlt size={iconSize} />
								</p>
							</div>
							<div
								className={
									styles["euskera-course-container__main__category-box"]
								}
								style={{
									background: "var(--vocabulary-gradient)",
								}}
							>
								<span
									className={
										styles[
											"euskera-course-container__main__category-box__title"
										]
									}
								>
									Vocabulario
								</span>
								<p>
									Con estos artículos aprenderás nuevas palabras ¿Evidente, no?
								</p>
								<p
									className={
										styles["euskera-course-container__main__category-box__icon"]
									}
								>
									<FaCat size={iconSize} />
								</p>
							</div>
							<div
								className={
									styles["euskera-course-container__main__category-box"]
								}
								style={{ background: "var(--blog-gradient)" }}
							>
								<span
									className={
										styles[
											"euskera-course-container__main__category-box__title"
										]
									}
								>
									Blog
								</span>
								<p>
									Y con estos posts aprenderás sobre temas relacionados con el
									euskera que no entran en las anteriores categorías.
								</p>
								<p
									className={
										styles["euskera-course-container__main__category-box__icon"]
									}
								>
									<BiBookHeart size={iconSize} />
								</p>
							</div>
						</div>
						<p>
							Y los artículos de las 3 categorías tienen algo en común:{" "}
							<strong>
								todo son lecciones escritas desde la cercanía y con mucho mimo…
							</strong>{" "}
							Además, <strong>cada semana creamos nuevos artículos</strong> que
							vamos añadiendo aquí.
						</p>
						<p>
							<strong>¡Así que, adelante!</strong> Dale caña ¡Sumérgete en el
							euskera! O, mejor dicho, como dirían por aquí 😉:
						</p>
					</section>
					<section className={styles["euskera-course-container__articles"]}>
						<span
							className={styles["euskera-course-container__articles__title"]}
							id="articulos"
						>
							<span>¡Murgildu zaitez euskaran!</span>
						</span>
						<div
							className={
								styles["euskera-course-container__articles__category-section"]
							}
						>
							<h2 style={{ background: "var(--gramar-gradient)" }}>
								Gramática
							</h2>
							<LandingArticleList data={articles.gramatica} />
						</div>
						<div
							className={
								styles["euskera-course-container__articles__category-section"]
							}
						>
							<h2 style={{ background: "var(--vocabulary-gradient)" }}>
								Vocabulario
							</h2>
							<LandingArticleList data={articles.vocabulario} />
						</div>
						<div
							className={
								styles["euskera-course-container__articles__category-section"]
							}
						>
							<h2 style={{ background: "var(--blog-gradient)" }}>Blog</h2>
							<LandingArticleList data={articles.blog} />
						</div>
					</section>
				</PageContainerBox>
			</div>
		</PageContainerBox>
	);
};

export default EuskeraCourseContainer;
