import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const inputText = {
    outline: "none",
    padding: "0.75rem",
    width: "10rem",
    height: "0.75rem",
    borderRadius: "0.5rem",
    marginRight: "1rem",
    border: "none",
  };

  const [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const UpperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return todo;
        }
      })
    );
  };

  const upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };

  const markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  const markAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };
  return (
    <div>
      <h3>Add Task</h3>
      <input
        type="text"
        placeholder="Add new Task"
        value={newTodo}
        onChange={updateTodoValue}
        style={inputText}
      />
      <button onClick={addNewTask}>Add</button>
      <br></br>
      <br></br>
      <br></br>
      <h4>Tasks Todo</h4>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "flex-start",
        }}
      >
        {todos.map((todo) => (
          <li key={todo.id}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <span
                style={todo.isDone ? { textDecoration: "line-through" } : null}
              >
                {todo.task}
              </span>

              <button onClick={() => deleteTodo(todo.id)}>delete</button>
              <button onClick={() => UpperCaseOne(todo.id)}>update</button>
              <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button> &nbsp;&nbsp;
      <button onClick={markAll}>Mark All</button>
    </div>
  );
};

export default TodoList;
