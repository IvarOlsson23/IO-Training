const initalState = {
  user: {},
};

export const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        user: {
          ...state.user,
          email: action.payload,
        },
      };

    case "ADD_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
};
