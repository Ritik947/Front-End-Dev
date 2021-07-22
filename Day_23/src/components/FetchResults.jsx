import { useState, useEffect } from "react";

const useFetch = (searchVal, setStatus, url, setSearchData) => {
  const [dataUrl, setDataUrl] = useState(url);

  useEffect(() => {
    if (!searchVal || !searchVal.trim()) {
      return;
    }
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch(dataUrl, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "687e7bd97cmsh2d161213064f85bp1ecaabjsn5a362592f237",
          "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        },
      });
      const data = await response.json();
      console.log(data);
      setSearchData(data);
      setStatus("fetched");
    };
    fetchData();
  }, [dataUrl]);
  return [setDataUrl];
};

export default useFetch;
