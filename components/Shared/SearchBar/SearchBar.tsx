import { FaSearch } from "react-icons/fa";
import { CategoriesEnum } from "../../../types/categories";
import { CategoriesDict } from "../../Categories/categories";
import styles from "./styles.module.css";

interface Props {
  searchQuery: string;
  filter: any;
  setFilter: any;
  category: CategoriesEnum;
  onCategoryChange: (category: any) => any;
  onSearchFilterChange: (filter: any) => any;
  onSearchQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
}

const selectFilters = [
  {
    value: {
      sortBy: "createdAt",
      order: "DESC",
    },
    text: "Recientes",
  },
  {
    value: {
      sortBy: "createdAt",
      order: "ASC",
    },
    text: "Antiguos",
  },
];

const SearchBar: React.FC<Props> = ({
  searchQuery,
  onSearchQueryChange,
  onSearchFilterChange,
  filter,
  setFilter,
  onSubmit,
  category,
  onCategoryChange,
}) => {
  return (
    <form className={styles["search-bar"]} onSubmit={onSubmit}>
      <div className={styles["search-bar__input-box"]}>
        <input
          aria-label="Busca un artículo"
          placeholder="Busca un artículo..."
          value={searchQuery}
          onChange={onSearchQueryChange}
        ></input>
        <button className={styles["search-bar__search-button"]} type="submit">
          <FaSearch />
        </button>
      </div>
      <div className={styles["search-bar__filter-selects"]}>
        <div className={styles["search-bar__select-box"]}>
          <select
            value={selectFilters.findIndex(
              (f) =>
                f.value.order === filter.order &&
                f.value.sortBy === filter.sortBy
            )}
            onChange={(e) => {
              setFilter(selectFilters[e.target.value as any].value);
              onSearchFilterChange(selectFilters[e.target.value as any].value);
            }}
          >
            {selectFilters.map((filter, index) => (
              <option key={index} value={index}>
                {filter.text}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["search-bar__select-box"]}>
          <select
            value={category}
            onChange={(e) => {
              onCategoryChange(e.target.value);
            }}
            defaultValue=""
          >
            <option value={""}>Categorías</option>
            {Object.keys(CategoriesDict).map((category) => (
              <option key={category} value={category}>
                {CategoriesDict[category as CategoriesEnum].text}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
