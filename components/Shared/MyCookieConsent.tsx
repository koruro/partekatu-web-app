import React from "react";
import CookieConsent from "react-cookie-consent";

const MyCookieConsent = () => {
	const setCookieValues = (state: boolean) => {
		// Set Google Analytics cookie
		(window[
			`ga-disable-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ""}` as any
		] as any) = !state;
	};

	return (
		<CookieConsent
			enableDeclineButton
			disableStyles
			buttonClasses="cookie-consent__button accept"
			buttonText="Aceptar"
			declineButtonClasses="cookie-consent__button decline"
			declineButtonText="Rechazar"
			buttonWrapperClasses="cookie-consent__wrapper"
			containerClasses="cookie-consent"
			onAccept={() => {
				setCookieValues(true);
			}}
			onDecline={() => {
				setCookieValues(false);
			}}
		>
			<h3>Cookies 🍪</h3>
			<p>
				Nosotros utilizamos cookies para personalizar el contenido y analizar el
				tráfico de datos. Nuestras cookies no guardan ningún tipo de información
				personal. Ver <a href="cookies">Política de Cookies</a>.
			</p>
		</CookieConsent>
	);
};

export default MyCookieConsent;
