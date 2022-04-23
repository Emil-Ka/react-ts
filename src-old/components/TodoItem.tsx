import React, {FC} from 'react';

import {ITodo} from '../types/types';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
  return (
    <div key={todo.id}>
      {todo.id}. {todo.title} {todo.completed ? 'выполнено' : 'не выполнено'}
    </div>
  );
};

export default TodoItem;