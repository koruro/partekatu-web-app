import FlexCenterBox from "../../components/Page/FlexCenterBox/FlexCenterBox";
import ButtonLink from "../../components/Shared/Buttons/ButtonLink";
import Logo404 from "../../components/Shared/Logo404";
import styles from "./styles.module.css";

const ClientErrorContainer = () => {
	return (
		<FlexCenterBox>
			<div className={styles["error-container"]}>
				<h1>
					<Logo404 width="120px" />
					Ups...
				</h1>
				<div className={styles["error-container__content"]}>
					<p>
						Parece que ha ocurrido algún error inesperado en la web. Prueba a
						refrescar o haz click abajo para volver al inicio.
					</p>
				</div>
				<ButtonLink
					href="/"
					className={styles["home__button"]}
					style={{ marginTop: "3rem" }}
				>
					Inicio
				</ButtonLink>
			</div>
		</FlexCenterBox>
	);
};

export default ClientErrorContainer;
