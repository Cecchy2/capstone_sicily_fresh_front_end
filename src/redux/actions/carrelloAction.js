export const CREA_CARRELLO = "CREA_CARRELLO";
export const GET_CARRELLO = "GET_CARRELLO";

const baseURL = import.meta.env.VITE_API_URL;

export const creaCarrello = (clienteId) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/carrelli`;
    const token = localStorage.getItem("authToken");

    const carrelloPayload = {
      cliente: clienteId,
    };

    try {
      const resp = await fetch(baseEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(carrelloPayload),
      });

      if (resp.ok) {
        const result = await resp.json();

        dispatch({ type: CREA_CARRELLO, payload: result });
      } else {
        throw new Error("Creazione del carrello fallita");
      }
    } catch (error) {
      console.log("Errore durante la creazione del carrello:", error);
    }
  };
};

export const getCarrelloByClienteId = (clienteId) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/carrelli/${clienteId}`;
    const token = localStorage.getItem("authToken");
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

      dispatch({ type: GET_CARRELLO, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};
