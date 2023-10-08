import { TODO_FILTERS, FILTER_BUTTONS } from '../consts'

import { type FilterValue } from '../types'
interface Props {
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange
}) => {
  return (
    <ul className="filters">
      <li>
        <a
          className={`${filterSelected} === 'all' ? 'selected' : ''`}
          onClick={() => {
            onFilterChange('all')
          }}
        >
          All
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected} === 'active' ? 'selected' : ''`}
          onClick={() => {
            onFilterChange('active')
          }}
        >
          Actives
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected} === 'completed' ? 'selected' : ''`}
          onClick={() => {
            onFilterChange('completed')
          }}
        >
          Completed
        </a>
      </li>
    </ul>
  )
}
