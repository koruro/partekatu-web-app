export interface ColorPallete {
	primary: string;
	primaryLight: string;
	secondary: string;
	clear: string;
	text: string;
	textSubtle: string;
	warn: string;
	math: string;
	science: string;
	correct: string;
	sand: string;
	education: string;
	euskera: string;
	utilities: string;
	tecnology: string;
	spanish: string;
}

export interface ColorTheme {
	light: ColorPallete;
	dark: ColorPallete;
}

export interface Breakpoints {
	xs: string;
	sm: string;
	md: string;
	lg: string;
	xl: string;
}
