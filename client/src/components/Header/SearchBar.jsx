import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        placeholder="Sök efter produkter..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-md w-full bg-white"
      />
      <button
        type="submit"
        className="bg-emerald-600 text-white px-4 py-2 rounded-md"
      >
        Sök
      </button>
    </form>
  );
};

export default SearchBar;
