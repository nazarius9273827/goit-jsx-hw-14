export default function Searchbar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    if (query) {
      onSubmit(query);
      e.target.reset();
    }
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          className="input"
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
