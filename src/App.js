import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import './App.css';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [sortByDueDate, setSortByDueDate] = useState(false);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        dueDate: dueDate || null
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
      setDueDate('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  let filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });
  
  // Sort by due date if enabled
  if (sortByDueDate) {
    filteredTodos = [...filteredTodos].sort((a, b) => {
      // Put todos without due dates at the end
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    });
  }

  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="App">
      <div className="todo-app">
        <h1>TODO App</h1>
        
        <div className="add-todo">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            placeholder="What needs to be done?"
            className="text-input"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="date-input"
          />
          <button onClick={addTodo}>Add</button>
        </div>
        
        {todos.length > 0 && (
          <>
            <ul className="todo-list">
              {filteredTodos.map(todo => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <div className="todo-content">
                    <span className="todo-text">{todo.text}</span>
                    {todo.dueDate && (
                      <span className="todo-due-date">
                        Due: {new Date(todo.dueDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
              ))}
            </ul>
            
            <div className="todo-footer">
              <span>{activeTodosCount} items left</span>
              
              <div className="filters">
                <button 
                  className={filter === 'all' ? 'active' : ''}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button 
                  className={filter === 'active' ? 'active' : ''}
                  onClick={() => setFilter('active')}
                >
                  Active
                </button>
                <button 
                  className={filter === 'completed' ? 'active' : ''}
                  onClick={() => setFilter('completed')}
                >
                  Completed
                </button>
                <button 
                  className={sortByDueDate ? 'active' : ''}
                  onClick={() => setSortByDueDate(!sortByDueDate)}
                >
                  {sortByDueDate ? 'Sorted by Due Date' : 'Sort by Due Date'}
                </button>
              </div>
              
              <button onClick={clearCompleted}>Clear completed</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
