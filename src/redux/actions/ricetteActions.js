export const GET_RICETTE = "GET_RICETTE";
export const CREA_RICETTA_SUCCESS = "CREA_RICETTA_SUCCESS";

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

export const creaRicetta = (ricettaPayload, immaginePiatto) => {
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
      }
    } catch (error) {
      console.log(error);
    }
  };
};
