import { ChangeEvent, FormEvent } from "react";

type Props = {
  onSearch: (searchTerm: string) => void,
  searchTerm: string,
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void,
};

const SearchBar = ({ onSearch, searchTerm, handleSearchChange }: Props) => {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="w-full max-w-xs mx-auto md:max-w-md">
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center"
        role="form"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
