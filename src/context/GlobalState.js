import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  users: [],
};

export const GlobalContext = createContext(initialState);

export const GLobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const addTodo = (id) => {
    dispatch({
      type: "ADD_TODO",
      payload: id,
    });
  };

  const editTodo = (user) => {
    dispatch({
      type: "EDIT_TODO",
      payload: user,
    });
  };

  const deleteAllTodo = () => {
    dispatch({
      type: "DELETEALL_TODO",
    });
  };

  // const completeTodo = (id) => {
  //   dispatch({
  //     type: "COMPLETE_TODO",
  //     payload: id,
  //   });
  // };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeTodo,
        addTodo,
        editTodo,
        deleteAllTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
