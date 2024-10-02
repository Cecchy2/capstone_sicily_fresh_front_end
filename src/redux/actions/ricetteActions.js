export const GET_RICETTE = "GET_RICETTE";

export const getRicette = () => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/ricette`;
    try {
      const resp = await fetch(baseEndPoint);
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
