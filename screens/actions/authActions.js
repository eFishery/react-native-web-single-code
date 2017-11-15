function login() {
  return {
    type: 'login',
  };
}

function logout() {
  return {
    type: 'logout',
  };
}

export { login, logout };
