export const CREA_CARRELLO_DETTAGLIO = "CREA_CARRELLO_DETTAGLIO";

export const aggiungiCarrelloDettaglio = (carrelloDettaglioPayload) => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/carrelloDettagli`;
    const token = localStorage.getItem("authToken");

    try {
      const resp = await fetch(baseEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(carrelloDettaglioPayload),
      });

      if (resp.ok) {
        const result = await resp.json();
        console.log("CarrelloDettaglio creato:", result);

        dispatch({ type: CREA_CARRELLO_DETTAGLIO, payload: result });
      } else {
        throw new Error("Creazione del carrelloDettaglio fallita");
      }
    } catch (error) {
      console.log("Errore durante la creazione del carrelloDettaglio:", error);
    }
  };
};
