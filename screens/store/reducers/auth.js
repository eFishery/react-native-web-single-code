const defaultState = {
  isLoggedIn: false,
};

const auth = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case 'LOGIN': {
      return Object.assign({}, state, { isLoggedIn: true });
    }
    case 'LOGOUT': {
      return Object.assign({}, state, { isLoggedIn: false });
    }
    default:
      return state;
  }
};

export default auth;
