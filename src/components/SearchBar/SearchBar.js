import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Pesquise sua nota..."
      ></input>
    </div>
  );
};

export default SearchBar;
