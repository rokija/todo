import React from "react";
import Todo from '../containers/Todo';
import TodoList from '../containers/TodoList';

const App = () => {
  return (
    <div>
      <p>To do</p>
      <Todo />
      <TodoList />
    </div>
  );
};
export default App;