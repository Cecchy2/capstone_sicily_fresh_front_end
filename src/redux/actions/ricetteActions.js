export const GET_RICETTE = "GET_RICETTE";
export const CREA_RICETTA_SUCCESS = "CREA_RICETTA_SUCCESS";
export const DELETE_RICETTA = "DELETE_RICETTA";
export const GET_RICETTA_BY_ID = "GET_RICETTA_BY_ID";
export const GET_RICETTE_BY_FORNITORE = "GET_RICETTE_BY_FORNITORE";

export const getRicette = (page = 0, size = 100) => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/authorization`;

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

export const creaRicetta = (ricettaPayload, immaginePiatto, immaginiPassaggi) => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/ricette`;
    const token = localStorage.getItem("authToken");

    try {
      const resp = await fetch(baseEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(ricettaPayload),
      });

      if (resp.ok) {
        const result = await resp.json();
        console.log("Ricetta creata:", result);
        dispatch({ type: CREA_RICETTA_SUCCESS, payload: result });

        if (immaginePiatto) {
          const formData = new FormData();
          formData.append("immaginePiatto", immaginePiatto);
          const imageEndpoint = `${baseEndPoint}/${result.ricettaId}/immaginePiatto`;
          await fetch(imageEndpoint, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          });
        }

        if (immaginiPassaggi && immaginiPassaggi.length > 0) {
          for (let i = 0; i < immaginiPassaggi.length; i++) {
            const formData = new FormData();
            formData.append("immaginePassaggio", immaginiPassaggi[i]);
            const passaggioDiPreparazioneId = result.passaggi[i].id;
            const passaggioEndpoint = `http://localhost:3001/passaggidipreparazione/${passaggioDiPreparazioneId}/immaginePassaggio`;
            await fetch(passaggioEndpoint, {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
              },
              body: formData,
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRicetta = (ricettaId) => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/ricette/${ricettaId}`;
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
          type: DELETE_RICETTA,
          payload: ricettaId,
        });
        alert("Ricetta eliminata con successo!");
      } else {
        console.log("Errore durante l'eliminazione della ricetta");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRicettaById = (ricettaId) => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/ricette/${ricettaId}`;
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
        dispatch({ type: GET_RICETTA_BY_ID, payload: result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRicetteByFornitoreId = (fornitoreId) => {
  return async (dispatch) => {
    const baseEndPoint = `http://localhost:3001/ricette/get/${fornitoreId}`;
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_RICETTE_BY_FORNITORE,
          payload: data,
        });
      } else {
        throw new Error("Fallita fetch");
      }
    } catch (error) {
      console.error("Errore nella fetch", error);
    }
  };
};
