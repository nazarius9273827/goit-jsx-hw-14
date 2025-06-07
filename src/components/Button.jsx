export default function Button({ onClick }) {
  return (
    <div className="load-more">
      <button type="button" className="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
