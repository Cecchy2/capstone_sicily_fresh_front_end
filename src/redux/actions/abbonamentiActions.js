export const CREA_ABBONAMENTO = "CREA_ABBONAMENTO";
export const GET_ABBONAMENTO_CLIENTE = "GET_ABBONAMENTO_CLIENTE";

const local = `http:////localhost:3001`;
const prod = `https://occupational-rubia-cecchy-98f537b0.koyeb.app`;

export const creaAbbonamento = (abbonamentoPayload) => {
  return async (dispatch) => {
    const baseEndPoint = `${local}/abbonamenti`;
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
export const GetAbbonamentiByClienteId = (clienteId) => {
  return async (dispatch) => {
    const baseEndPoint = `${local}/abbonamenti/${clienteId}`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        dispatch({ type: GET_ABBONAMENTO_CLIENTE, payload: result });
      } else {
        console.error("Errore nella risposta API:", resp.status);
      }
    } catch (error) {
      console.error("Errore nella chiamata API:", error);
    }
  };
};
