const AppReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_TODO":
      return {
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };

    case "ADD_TODO":
      return {
        users: [action.payload, ...state.users],
      };

    case "EDIT_TODO":
      const updatedUser = action.payload;
      const updateUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });
      return {
        users: updateUsers,
      };

    case "DELETEALL_TODO":
      return {
        users: (state.users = []),
      };

    default:
      return state;
  }
};

export default AppReducer;
