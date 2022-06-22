import { useEffect, useCallback, useState } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/router";

type serachInputType = string | undefined

const useHeader = () => {
  const router = useRouter();
  
  const [isMenuToggle, toggleMenu] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<serachInputType>(undefined);

  const searchButtons = (value: serachInputType) => {
    if(value === '')
      router.push('/')
    else
      router.push(`/buttons-search-result/${value}`);
  };

  const debouncedSearchButtons = useCallback(debounce(searchButtons, 2000), []);

  useEffect(() => {
    if(searchInputValue !== undefined)
      debouncedSearchButtons(searchInputValue);
  }, [searchInputValue]);


  return {
    setSearchInputValue,
    isMenuToggle,
    toggleMenu
  };
};

export default useHeader;
