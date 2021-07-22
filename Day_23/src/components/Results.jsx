const Results = ({ status, searchData }) => {
  if (!searchData) {
    if (status === "fetching") {
      return <div style={{ color: "white" }}>Waiting for results</div>;
    } else {
      return <div style={{ color: "white" }}>Search for something</div>;
    }
  } else {
    if (status === "fetching") {
      return <div style={{ color: "white" }}>Waiting for results</div>;
    } else {
      return (
        <div className="results-container">
          <div className="related-results">
            {searchData.relatedSearch.map((el, index) => (
              <div className="related-result" key={index}>
                {el}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
};

export default Results;
