import { Article } from "../../models/Article";
import { CategoriesEnum } from "../../types/categories";

export const getEuskaltegiFakeArticle = (): Article => ({
  id: "1034",
  emoji: "🔍",
  locale: "es",
  infographic: "",
  title: "Buscador de euskaltegis",
  description:
    "Una de las mejores formas de aprender euskera es los apuntándote a un euskaltegi o academia de euskera ¡Descubre cuáles tienes cerca con nuestro buscador!!",
  metadata: {},
  preamble: "",
  referedArticles: [],
  references: "",
  seoMetadata: {},
  slug: "euskaltegi/buscador",
  videoUrl: "",
  banner:
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  bulletPoints: [],
  category: {
    id: "1",
    slug: CategoriesEnum.BLOG,
    color: "",
    name: "blog",
    title: "Blog",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  content: "",
  createdAt: new Date().toISOString(),
  publishedAt: new Date().toISOString(),
});
