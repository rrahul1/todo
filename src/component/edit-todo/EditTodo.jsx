import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./style.css";

function EditTodo() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { users, editTodo } = useContext(GlobalContext);

  const [todoSelectedEdit, setTodoSelectedEdit] = useState({
    id: "",
    name: "",
  });

  useEffect(() => {
    const userId = id;
    const todoSelectedEdit = users.find((user) => user.id === userId);
    setTodoSelectedEdit(todoSelectedEdit);
  }, [id, users]);
  console.log(todoSelectedEdit);
  const handleEditTodo = (e) => {
    setTodoSelectedEdit({
      ...todoSelectedEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditButton = () => {
    editTodo(todoSelectedEdit);
    navigate("/");
  };

  return (
    <div className="edit-main">
      <h1>Edit Task Here</h1>
      <div className="edit">
        <input
          name="name"
          value={todoSelectedEdit.name}
          type="text"
          onChange={handleEditTodo}
        />
        <button onClick={handleEditButton}>Edit</button>
      </div>
    </div>
  );
}

export default EditTodo;
