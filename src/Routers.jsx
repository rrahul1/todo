import React from "react";
import { Routes, Route } from "react-router-dom";
import EditTodo from "./component/edit-todo/EditTodo";
import TodoFile from "./component/todo-file/TodoFile";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<TodoFile />} />
      <Route path="/edit/:id" element={<EditTodo />} />
    </Routes>
  );
}

export default Routers;
