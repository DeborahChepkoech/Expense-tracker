import { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setSearchTerm(inputValue);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search expenses..."
        value={inputValue}
        onChange={handleChange}
        className="search-bar"
      />
      <button className="search-button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
