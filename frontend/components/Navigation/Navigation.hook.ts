import { useEffect, useCallback, useState } from "react";
import { debounce } from "lodash";

const useNavigation = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const searchButtons = (value: string) => {
    console.log("searching with debounce", value);
  };

  const debounceSearchButtons = useCallback(debounce(searchButtons, 500), []);

  useEffect(() => {
    debounceSearchButtons(searchInputValue);
  }, [searchInputValue]);

  return {
    setSearchInputValue,
  };
};

export default useNavigation;
