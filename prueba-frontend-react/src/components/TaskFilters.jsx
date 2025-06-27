import { categories, priorities, statuses } from '../data/mockData';

const TaskFilters = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (filterType, value) => {
    // TODO: Implementar cambio de filtros
    const newFilters = {
      ...filters,
      [filterType]: value
    };
    onFiltersChange(newFilters);
  };

  return (
    <div className="filters">
      <select
        value={filters.category}
        onChange={(e) => handleFilterChange('category', e.target.value)}
      >
        {categories.map(category => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      <select
        value={filters.priority}
        onChange={(e) => handleFilterChange('priority', e.target.value)}
      >
        {priorities.map(priority => (
          <option key={priority.value} value={priority.value}>
            {priority.label}
          </option>
        ))}
      </select>

      <select
        value={filters.status}
        onChange={(e) => handleFilterChange('status', e.target.value)}
      >
        {statuses.map(status => (
          <option key={status.value} value={status.value}>
            {status.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskFilters;
