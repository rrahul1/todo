import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./style.css";

function TodoFile() {
  const { users, removeTodo, addTodo, deleteAllTodo } =
    useContext(GlobalContext);

  const [todoAdd, setTodoAdd] = useState("");
  const [deleteAll, setDeleteAll] = useState(false);
  const [popup, setPopup] = useState(false);
  const newTodo = {
    id: uuid(),
    name: todoAdd,
  };

  const handleAdd = () => {
    if (newTodo.name === "") {
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 2500);
    } else {
      addTodo(newTodo);
    }
    setTimeout(() => {
      setTodoAdd("");
    }, 100);
    setDeleteAll(true);
  };

  const handleDeleteAll = () => {
    deleteAllTodo();
  };

  return (
    <div className="todo_main">
      <div className="todo-box">
        <h2>Mark Notes/Add Todo List</h2>
        <div className="input">
          <input
            value={todoAdd}
            onChange={(e) => setTodoAdd(e.target.value)}
            type="text"
            placeholder="Add Todo"
          />
          <button onClick={handleAdd}>Add Todo</button>
          {deleteAll && users.length > 0 ? (
            <button onClick={handleDeleteAll}>Delete All</button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="todo-con">
        {users.length > 0 ? (
          users.map((user, i) => (
            <div key={i} className="todo">
              <p>{user.name}</p>
              <div className="action">
                <Link to={`/edit/${user.id}`}>Edit</Link>
                <button className="btn" onClick={() => removeTodo(user.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3 className="warn">Add Tasks To Make A List</h3>
        )}
      </div>
      {popup && (
        <div className="popup">
          <span>Enter Tasks To Add!!!</span>
        </div>
      )}
    </div>
  );
}

export default TodoFile;
