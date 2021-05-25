import { useFilter } from '../../hooks/useFilter';

const FilterBadge = () => {
  const { filterValue, setFilterValue } = useFilter();

  if (!filterValue) return null;

  return (
    <div className="mb-4">
      <span className="badge bg-info text-dark">
        {filterValue}
        <button
          type="button"
          className="btn-close"
          onClick={() => setFilterValue(undefined)}
        />
      </span>
    </div>
  )
};

export default FilterBadge;
