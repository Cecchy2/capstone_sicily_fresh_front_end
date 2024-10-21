export const CREA_CARRELLO_DETTAGLIO = "CREA_CARRELLO_DETTAGLIO";
export const GET_CARRELLO_DETTAGLIO = "GET_CARRELLO_DETTAGLIO";
export const RESET_CARRELLO_DETTAGLIO = "RESET_CARRELLO_DETTAGLIO";
export const DELETE_CARRELLO_DETTAGLIO = "DELETE_CARRELLO_DETTAGLIO";
export const GET_CARRELLO_DETTAGLIO_BY_RICETTA = "GET_CARRELLO_DETTAGLIO_BY_RICETTA";
export const CHANGE_STATO_CARRELLO_DETTAGLIO = "CHANGE_STATO_CARRELLO_DETTAGLIO";
export const GET_CARRELLO_DETTAGLIO_FORNITORE = "GET_CARRELLO_DETTAGLIO_FORNITORE";

export const aggiungiCarrelloDettaglio = (carrelloDettaglioPayload) => {
  return async (dispatch) => {
    const baseEndPoint = `http://occupational-rubia-cecchy-98f537b0.koyeb.app/carrelloDettagli`;
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
      alert("Non ci sono abbastanza ricette disponibili nel tuo abbonamento 😢");
    }
  };
};

export const findCarrelliDettagliByCarrelloId = (carrelloId) => {
  return async (dispatch) => {
    const baseEndPoint = `http://occupational-rubia-cecchy-98f537b0.koyeb.app/carrelloDettagli/${carrelloId}`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        dispatch({ type: GET_CARRELLO_DETTAGLIO, payload: result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetCarrelloDettaglio = () => {
  return {
    type: RESET_CARRELLO_DETTAGLIO,
  };
};

export const deleteCarrelloDettaglio = (carrelloDettaglioId) => {
  return async (dispatch) => {
    const confirmDelete = window.confirm("Sei sicuro di voler eliminare la ricetta?");
    if (!confirmDelete) {
      return;
    }
    const baseEndPoint = `http://occupational-rubia-cecchy-98f537b0.koyeb.app/carrelloDettagli/${carrelloDettaglioId}`;
    const token = localStorage.getItem("authToken");

    try {
      const resp = await fetch(baseEndPoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        dispatch({
          type: DELETE_CARRELLO_DETTAGLIO,
          payload: carrelloDettaglioId,
        });
        alert("Ricetta eliminata dal carrello");
      } else {
        console.log("Errore durante l'eliminazione della ricetta");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCarrelloDettaglioByRicetta = (ricettaId) => {
  return async (dispatch) => {
    const baseEndPoint = `http://occupational-rubia-cecchy-98f537b0.koyeb.app/carrelloDettagli/ricetta/${ricettaId}`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        dispatch({ type: GET_CARRELLO_DETTAGLIO_BY_RICETTA, payload: result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeStatoCarrelloDettaglio = (carrelloDettaglioId, nuovoStatoOrdine) => {
  return async (dispatch) => {
    const baseEndPoint = `http://occupational-rubia-cecchy-98f537b0.koyeb.app/carrelloDettagli/${carrelloDettaglioId}/stato`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          statoOrdine: nuovoStatoOrdine,
        }),
      });

      if (!resp.ok) {
        throw new Error("Failed to update order status");
      }
      const data = await resp.json();
      dispatch({
        type: CHANGE_STATO_CARRELLO_DETTAGLIO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCarrelloDettagliFornitore = (fornitoreId) => {
  return async (dispatch) => {
    const baseEndpoint = `http://occupational-rubia-cecchy-98f537b0.koyeb.app/carrelloDettagli/fornitore/${fornitoreId}`;
    const token = localStorage.getItem("authToken");

    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        dispatch({ type: GET_CARRELLO_DETTAGLIO_FORNITORE, payload: result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
