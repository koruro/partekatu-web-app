import { Category } from "../../Category";

export const serializeCategory = (category: Category) => {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    title: category.title,
    color: category.color,
    description: category.description ?? null,
    locale: category.locale ?? null,
    seoMetadata: category.seoMetadata,
    created_at: category.created_at,
    updated_at: category.updated_at,
  };
};

export const deserializeCategory = (
  category: ReturnType<typeof serializeCategory>
): Category => {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    title: category.title,
    color: category.color,
    description: category.description ?? undefined,
    locale: category.locale ?? undefined,
    seoMetadata: category.seoMetadata,
    created_at: category.created_at,
    updated_at: category.updated_at,
  };
};
