import { Filters } from './Filters'

export const Footer: React.FC<Props> = ({ todos, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>
      </span>
      <Filters filterSelected={} onFilterChange={}></Filters>
    </footer>
  )
}
