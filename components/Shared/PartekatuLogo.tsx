import * as React from "react";

const PartekatuLogo: React.FC<any> = (props) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463.1 71.2" {...props}>
			<linearGradient
				id="prefix__a"
				gradientUnits="userSpaceOnUse"
				x1={2.18}
				y1={27.423}
				x2={69.498}
				y2={27.423}
			>
				<stop offset={0} stopColor="#125ed8" />
				<stop offset={0.175} stopColor="#1a67da" />
				<stop offset={0.462} stopColor="#2f7fdf" />
				<stop offset={0.821} stopColor="#51a7e7" />
				<stop offset={1} stopColor="#65bdeb" />
			</linearGradient>
			<path
				d="M35.8 2.2c-18.6 0-33.6 15-33.6 33.6 0 9.3 7.5 16.8 16.8 16.8s16.8-7.5 16.8-16.8S43.3 19 52.6 19s16.8 7.5 16.8 16.8c.1-18.6-15-33.6-33.6-33.6z"
				fill="url(#prefix__a)"
			/>
			<linearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={35.839}
				y1={44.252}
				x2={103.157}
				y2={44.252}
			>
				<stop offset={0} stopColor="#65bdeb" />
				<stop offset={0.179} stopColor="#51a7e7" />
				<stop offset={0.538} stopColor="#2f7fdf" />
				<stop offset={0.825} stopColor="#1a67da" />
				<stop offset={1} stopColor="#125ed8" />
			</linearGradient>
			<path
				d="M86.3 19c-9.3 0-16.8 7.5-16.8 16.8S62 52.6 52.7 52.6s-16.8-7.5-16.8-16.8c0 18.6 15.1 33.7 33.7 33.7s33.7-15.1 33.7-33.7c-.1-9.3-7.7-16.8-17-16.8z"
				fill="url(#prefix__b)"
			/>
			<path fill="none" d="M122.8 2.1h396v72h-396z" />
			<text
				transform="translate(122.787 55.53)"
				letterSpacing={-3}
				fontSize={72}
				fontWeight={"bold"}
				fontFamily="Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif"
				fill="#07252e"
			>
				{"partekatu"}
			</text>
		</svg>
	);
};

export default PartekatuLogo;
