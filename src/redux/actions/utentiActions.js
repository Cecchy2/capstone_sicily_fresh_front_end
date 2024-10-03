export const GET_PROFILE = "GET_PROFILE";

export const getProfile = () => {
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
