import { useEffect, useState } from "react";
import ArticlesList from "../../components/Articles/List/ArticlesList";
import ReactPaginate from "react-paginate";
import SearchBar from "../../components/Shared/SearchBar/SearchBar";
import { useRouter } from "next/router";
import { QueryProps } from "../../pages/articulos";
import { CategoriesEnum } from "../../types/categories";
import PaginationBox from "../../components/Shared/Pagination/PaginationBox";
import styles from "./styles.module.css";
import PageContainerBox from "../../components/Page/PageContainerBox/PageContainerBox";
import { articleRepository } from "../../services/bootstrap";
import ArticlesContainerHeadingAd from "../../components/Ads/ArticlesContainerHeadingAd";

const DEFAULT_FILTER = {
  sortBy: "createdAt",
  order: "DESC",
};

const PAGE_SIZE = 8;

const getNumPages = (totalArticles: number, pageSize: number) => {
  return Math.ceil(totalArticles / pageSize);
};

interface Props {
  queryProps: QueryProps;
}
const ArticlesContainer: React.FC<Props> = ({ queryProps }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<typeof DEFAULT_FILTER>(DEFAULT_FILTER);
  const [category, setCategory] = useState<CategoriesEnum>();

  const [articlesLoading, setArticlesLoading] = useState(true);
  const [articles, setArticles] = useState<any>();
  const [numArticles, setNumArticles] = useState<any>();

  useEffect(() => {
    setCategory(queryProps.cat ?? null);
    setSearchQuery(queryProps.c ?? "");
    setFilter({
      order: queryProps.o ?? DEFAULT_FILTER.order,
      sortBy: queryProps.s ?? DEFAULT_FILTER.sortBy,
    });
  }, []);

  useEffect(() => {
    setArticlesLoading(true);
    articleRepository
      .getArticles({
        titleStartsWith: queryProps.c,
        category: queryProps.cat,
        skip: queryProps.p * PAGE_SIZE,
        order: { property: filter.sortBy, order: filter.order as any },
        limit: PAGE_SIZE,
      })
      .then((data) => {
        setArticles(data);
      })
      .catch(() => setArticles([]))
      .finally(() => setArticlesLoading(false));
  }, [queryProps.c, queryProps.p, filter, queryProps.cat]);

  useEffect(() => {
    articleRepository
      .getNumArticles({
        category: queryProps.cat,
        titleStartsWith: queryProps.c,
      })
      .then((data) => setNumArticles(data))
      .catch(() => setNumArticles(0));
  }, [queryProps.c, queryProps.cat]);

  return (
    <PageContainerBox breakLimit="xl">
      <div className={styles["articles-search"]}>
        <h1>Todos nuestros artículos sobre el euskera</h1>
        <ArticlesContainerHeadingAd />
        <SearchBar
          onSubmit={(e) => {
            e.preventDefault();
            router.push({
              pathname: "/articulos",
              query: {
                ...queryProps,
                p: 0,
                c: searchQuery,
              },
            });
          }}
          searchQuery={searchQuery}
          onSearchQueryChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          filter={filter}
          setFilter={setFilter}
          category={category!}
          onCategoryChange={(category) => {
            setCategory(category);
            router.push({
              pathname: "/articulos",
              query: {
                ...queryProps,
                cat: category,
                p: 0,
              },
            });
          }}
          onSearchFilterChange={(selectedFilter) => {
            router.push({
              pathname: "/articulos",
              query: {
                ...queryProps,
                o: selectedFilter.order,
                s: selectedFilter.sortBy,
                p: 0,
              },
            });
          }}
        />
        <ArticlesList
          data={articles}
          isLoading={articlesLoading}
          numFetched={PAGE_SIZE}
        />
        <p className={styles["articles-ammount"]}>
          {numArticles} Artículos encontrados.
        </p>
        {numArticles > 0 && (
          <PaginationBox>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              forcePage={queryProps.p ?? 0}
              initialPage={queryProps.p ?? 0}
              marginPagesDisplayed={1}
              pageCount={getNumPages(numArticles, PAGE_SIZE)}
              pageRangeDisplayed={3}
              onPageChange={(data) => {
                router.push({
                  pathname: "/articulos",
                  query: {
                    ...queryProps,
                    p: data.selected,
                  },
                });
              }}
            />
          </PaginationBox>
        )}
      </div>
    </PageContainerBox>
  );
};

export default ArticlesContainer;
