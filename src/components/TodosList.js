import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          handleChangeProps={props.handleChangeProps}
          key={todo.id}
          todo={todo}
          deleteTodoProps={props.deleteTodoProps}
        />
      ))}
    </ul>
  );
};

export default TodosList;
