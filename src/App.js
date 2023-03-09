

import React, { Routes, Route } from 'react-router-dom'

import RegisterPage from './pages/RegisteAccount';
import SigninPage from './pages/SigninAccount';
import TodoList from './pages/TodoList';

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
