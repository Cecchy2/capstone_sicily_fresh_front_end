export const CREA_ABBONAMENTO = "CREA_ABBONAMENTO";

export const creaAbbonamento = (abbonamentoPayload) => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/abbonamenti`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(abbonamentoPayload),
      });

      if (resp.ok) {
        const result = await resp.json();
        console.log("Abbonamento creato:", result);
        dispatch({ type: CREA_ABBONAMENTO, payload: result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
