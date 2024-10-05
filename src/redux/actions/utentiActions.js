export const GET_PROFILE = "GET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const getProfile = (id) => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/utenti/${id}`;
    const token = localStorage.getItem("authToken");
    console.log("Auth Token:", token);
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!resp.ok) {
        throw new Error(`Failed to fetch profile: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      console.log(result);
      dispatch({ type: GET_PROFILE, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfile = (id, utentePayload) => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/utenti/${id}`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(utentePayload),
      });
      if (!resp.ok) {
        throw new Error(`Failed to fetch profile: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      console.log("Utente modificato" + result);
      dispatch({ type: UPDATE_PROFILE, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};
