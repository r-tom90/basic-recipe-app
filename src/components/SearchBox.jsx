const SearchBox = ({ getSearch, search, updateSearch }) => {
  return (
    <form className="search-form" onSubmit={getSearch}>
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={updateSearch}
        placeholder="Enter Ingredients"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
