export function setEmail(email) {
  return {
    type: "SET_EMAIL",
    payload: email,
  };
}

export function addPassword(password) {
  return {
    type: "ADD_PASSWORD",
    payload: password,
  };
}
