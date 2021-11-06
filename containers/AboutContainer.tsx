import React from "react";
import FlexCenterBox from "../components/Page/FlexCenterBox/FlexCenterBox";
import PageContainerBox from "../components/Page/PageContainerBox/PageContainerBox";

const AboutContainer = () => {
	return (
		<FlexCenterBox>
			<PageContainerBox breakLimit="lg">
				<section className="article-content" style={{ marginTop: "5rem" }}>
					<h1>Quiénes Somos</h1>
					<h2>Objetivo</h2>
					<p>
						<strong>Partekatu.com</strong> es una web educativa dirigida a
						estudiantes, profesores o gente curiosa.{" "}
						<strong>
							¡Cualquiera puede aprender con nuestra web y es totalmente gratis!
						</strong>
					</p>
					<p>
						Nuestro objetivo es ser una web educativa de referencia mundial y,
						para eso, ofrecemos contenidos educativos explicados de forma fácil
						y visual.
					</p>
					<h2>Nosotros</h2>
					<div>
						Detrás del proyecto estamos{" "}
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
						. Somos dos amigos jóvenes que compartimos la ilusión por el
						proyecto:
						<ul>
							<li>
								<strong>Ander</strong> es ingeniero en telecomunicaciones y se
								encarga, principalmente, del desarrollo de la web.
							</li>
							<li>
								<strong>Xabier</strong>, en cambio, es profesor, y se encarga,
								principalmente, del contenido.
							</li>
						</ul>
					</div>
					<img
						decoding="async"
						src="https://koruro.s3.sa-east-1.amazonaws.com/directores_koruro_77070f0d35.png"
					></img>
				</section>
			</PageContainerBox>
		</FlexCenterBox>
	);
};

export default AboutContainer;
