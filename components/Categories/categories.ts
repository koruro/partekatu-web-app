import { CategoriesEnum } from "../../types/categories";
import colors from "../../styles/colors";

export const CategoriesDict: Record<
	CategoriesEnum,
	{ text: string; color: string; slug: string }
> = {
	blog: {
		text: "Blog",
		color: colors.light.education,
		slug: "blog",
	},
	gramatica: {
		text: "Gramática",
		color: colors.light.euskera,
		slug: "gramar",
	},
	vocabulario: {
		text: "Vocabulario",
		color: colors.light.math,
		slug: "vocabulary",
	},
};
