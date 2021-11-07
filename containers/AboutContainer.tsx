import PageContainerBox from "../components/Page/PageContainerBox/PageContainerBox";
import AboutUsSvg from "../components/Shared/AboutUsSvg";

const AboutContainer = () => {
	return (
		<PageContainerBox breakLimit="md">
			<section className="article-content" style={{ marginTop: "5rem" }}>
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
				<div>
					<strong>
						Detrás de este proyecto estamos Detrás del proyecto estamos{" "}
						<a
							href="https://www.linkedin.com/in/ander-benito/"
							target="_blank"
							rel="noopener"
						>
							Ander Benito
						</a>{" "}
						y{" "}
						<a
							href="https://www.linkedin.com/in/xabier-madorr%C3%A1n-de-la-iglesia-a83b03206/"
							target="_blank"
							rel="noopener"
						>
							Xabier Madorrán
						</a>
					</strong>
					, dos jóvenes vascos que queremos que aprender euskera te sea lo más
					fácil posible:
					<ul>
						<li>
							<strong>Xabi es profesor, precisamente, de euskera,</strong> y ha
							trabajado en euskaltegis, centros de educación primaria y
							secundaria e incluso en el propio departamento de educación del
							Gobierno Vasco. Él se encarga de crear el contenido de los
							artículos y las imágenes de la web.
						</li>
						<li>
							<strong>
								Ander, en cambio, es ingeniero en telecomunicaciones
							</strong>{" "}
							y todo un apasionado del desarrollo de software. Ha trabajado en
							diversas empresas del sector, y es el encargado del desarrollo de
							la web ¡Gracias a él partekatu.com se ve y funciona tan bien!
						</li>
					</ul>
					<p>Por lo que, como ves, ¡Aquí somos de fiar! 😇😅</p>
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<AboutUsSvg width={"80%"} />
				</div>
			</section>
		</PageContainerBox>
	);
};

export default AboutContainer;
