export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/authorization/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      if (data.accessToken) {
        localStorage.setItem("authToken", data.accessToken);
        localStorage.setItem("userId", data.utenteId);
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      } else {
        throw new Error("Token non ricevuto dalla risposta");
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };
};

export const LOGOUT = "LOGOUT";

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    dispatch({ type: LOGOUT });
  };
};
