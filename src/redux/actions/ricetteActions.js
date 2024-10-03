export const GET_RICETTE = "GET_RICETTE";

export const getRicette = () => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/ricette`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch({ type: GET_RICETTE, payload: result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
