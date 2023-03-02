

import React, { Routes, Route } from 'react-router-dom'

import RegisterPage from './RegisterAccount/RegisteAccount';
import SigninPage from './RegisterAccount/SigninAccount';
import TodoList from './updateTodoList/TodoList';

function App() {


  return (
    <Routes>
      <Route path="/" element={<SigninPage />}></Route>
      <Route path="register" element={<RegisterPage />}></Route>
      <Route path="todolist" element={<TodoList />}></Route>
    </Routes>
  );
}

export default App;
