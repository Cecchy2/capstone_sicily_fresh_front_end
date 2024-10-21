export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER = "REGISTER";

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

export const register = (payload, avatar) => {
  return async (dispatch) => {
    const baseEndPoint = `http://https://sicilyfresh.netlify.app/authorization/register`;
    const formData = new FormData();

    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });
    if (avatar) {
      formData.append("avatar", avatar);
    }
    try {
      const resp = await fetch(baseEndPoint, {
        method: "POST",
        body: formData,
      });
      if (!resp.ok) {
        throw new Error("Registrazione fallita");
      }
      const data = await resp.json();
      dispatch({
        type: REGISTER,
        payload: data,
      });
      return { success: true, userId: data.id };
    } catch (error) {
      console.log(error);
    }
  };
};
