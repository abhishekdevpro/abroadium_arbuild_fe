import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize state from URL parameters
  const [getKeyWord, setKeyWord] = useState(searchParams.get('keywords') || '');

  // Keyword handler to update the URL
  const keywordHandler = (e) => {
    const keyword = e.target.value;

    // Update local state
    setKeyWord(keyword);

    // Update URL parameters
    const currentParams = Object.fromEntries(searchParams);
    if (keyword) {
      currentParams['keywords'] = keyword;
    } else {
      delete currentParams['keywords'];
    }
    setSearchParams(currentParams);
  };

  // Synchronize state with URL changes
  useEffect(() => {
    const urlKeyword = searchParams.get('keywords');
    if (urlKeyword !== null) {
      setKeyWord(urlKeyword);
    }
  }, [searchParams]);

  return (
    <>
      <input
        type="text"
        name="listing-search"
        placeholder="Job title, keywords, or company"
        value={getKeyWord}
        onChange={keywordHandler}
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="icon flaticon-search-3"></span>
    </>
  );
};

export default SearchBox;
