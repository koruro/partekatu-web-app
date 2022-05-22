import classNames from "classnames";
import LoadingRing from "../../../../Loading/Ring/LoadingRing";
import styles from "./styles.module.css";

interface Match {
  name: string;
}

interface Props {
  onMatchClick: (match: Match) => void;
  matches?: Match[];
  loading?: boolean;
}

const Autocomplete: React.FC<Props> = ({ matches, onMatchClick, loading }) => {
  if (!matches) return null;
  if (matches.length <= 0) return null;

  return (
    <div className={classNames(styles["autocomplete"], "elevate-2")}>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingRing />
        </div>
      ) : (
        <ul>
          {matches.map((match, index) => (
            <li
              key={index}
              onMouseDown={(e) => {
                e.preventDefault();
                onMatchClick(match);
              }}
            >
              {match.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
