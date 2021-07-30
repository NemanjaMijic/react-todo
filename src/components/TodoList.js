import React from 'react'
import Todo from './Todo'
const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        todos={todos} 
                        setTodos={setTodos} 
                        text={todo.text} 
                        todo={todo}
                        key={todo.id}>  
                    </Todo>
                ))}
                
            </ul>
        </div>
    );
}

export default TodoList
