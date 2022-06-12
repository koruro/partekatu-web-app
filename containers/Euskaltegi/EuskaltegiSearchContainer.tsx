import { useState } from "react";
import Autocomplete from "../../components/Article/InteractiveComponents/SurnameFinder/Autocomplete/Autocomplete";
import CustomInput from "../../components/Article/InteractiveComponents/SurnameFinder/Input/CustomInput";

const EuskaltegiSearchContainer = () => {
  const [typedSite, setTypedSite] = useState<string>("");
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);

  return (
    <div>
      <CustomInput
        placeholder="Busca una provincia o ciudad..."
        value={typedSite}
        onValueChange={(value) => {
          setShowAutoComplete(true);
          setTypedSite(value);
        }}
        onBlur={() => {
          setShowAutoComplete(false);
        }}
        onFocus={() => setShowAutoComplete(true)}
      />
      {showAutoComplete && (
        <Autocomplete
          matches={undefined}
          onMatchClick={(match) => {
            console.log(match);
          }}
        />
      )}
    </div>
  );
};

export default EuskaltegiSearchContainer;
