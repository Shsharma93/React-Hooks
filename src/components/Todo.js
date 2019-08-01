import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [todoName, setTodoName] = useState('');
  const [submittedTodo, setSubmittedTodo] = useState(null);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    try {
      fetchData();
      async function fetchData() {
        const response = await axios.get(
          'https://todo-807da.firebaseio.com/todos.json'
        );
        console.log(response);
        const todoData = response.data;
        const todos = [];
        for (const key in todoData) {
          todos.push({ id: key, name: todoData[key].name });
        }
        setTodoList(todos);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (submittedTodo) {
      setTodoList(todoList.concat(submittedTodo));
    }
  }, [submittedTodo]);

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };

  const todoAddHandler = async () => {
    try {
      const result = await axios.post(
        'https://todo-807da.firebaseio.com/todos.json',
        { name: todoName }
      );
      const todoItem = { id: result.data.name, name: todoName };
      setSubmittedTodo(todoItem);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async id => {
    setTodoList(todoList.filter(todo => todo.id !== id));
    try {
      const result = await axios.delete(
        `https://todo-807da.firebaseio.com/todos/${id}.json`
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <input
        type='text'
        placeholder='Todo'
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button onClick={todoAddHandler}>Add</button>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Todo;
