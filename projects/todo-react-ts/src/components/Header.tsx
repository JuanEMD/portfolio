import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: (title: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        todo
        <img style={{ width: '60px', height: 'auto' }} />
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
