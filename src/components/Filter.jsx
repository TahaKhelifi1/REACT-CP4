const Filter = ({ onTitleChange, onRatingChange }) => (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
  export default Filter;
   