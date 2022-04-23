import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {IUser, ITodo} from './types/types';

import Card from './components/Card';
import UserList from './components/UserList';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';

// const users: IUser[] = [
//   {id: 1, name: 'Emil', email: 'emil@gmail.com', address: {street: 'Lenina', city: 'Moscow', zipcode: '12345'}}
// ]

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      alert(err);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <List 
        items={users}
        renderItems={(user: IUser) => <UserItem user={user}/> }/>
      <List 
        items={todos}
        renderItems={(todo: ITodo) => <TodoItem todo={todo}/> }/>
      <EventsExample/>
    </div>
  );
};

export default App;
