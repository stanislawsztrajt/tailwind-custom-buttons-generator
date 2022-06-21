import { useEffect, useCallback, useState } from "react";
import { debounce } from "lodash";

const useHeader = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const searchButtons = (value: string) => {
    console.log("searching with debounce", value);
  };

  const debouncedSearchButtons = useCallback(debounce(searchButtons, 500), []);

  useEffect(() => {
    debouncedSearchButtons(searchInputValue);
  }, [searchInputValue]);

  return {
    setSearchInputValue,
  };
};

export default useHeader;
