import useFetch from "./FetchResults";
import { useState } from "react";

const Search = ({ setStatus, setSearchData }) => {
  const [searchVal, setSearchVal] = useState("");
  const param = encodeURIComponent(searchVal);
  let url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${param}&pageNumber=1&pageSize=10&autoCorrect=true`;
  const [setDataUrl] = useFetch(searchVal, setStatus, url, setSearchData);
  function getDataFromUrl() {
    if (searchVal && searchVal.trim()) {
      setDataUrl(url);
      console.log("Search request made");
    }
  }
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search text here (500 Searches/Day LIMIT)"
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      />
      <img src="images/search.svg" alt="" onClick={getDataFromUrl} />
    </div>
  );
};

export default Search;
