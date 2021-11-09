export const classConcat = (styles: any, classes: string[]) => {
	return classes.map((className) => styles[className]).join(" ");
};
