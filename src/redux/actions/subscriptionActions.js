export const createCheckoutSession = (price) => async (dispatch, getState) => {
  try {
    dispatch({ type: "CREATE_CHECKOUT_SESSION_REQUEST" });

    // Prendi il token dal Redux store (se stai salvando l'autenticazione nello stato)
    const { auth } = getState();
    const token = localStorage.getItem("authToken"); // Assumi che il token JWT sia memorizzato qui

    const response = await fetch("http://localhost:3001/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Aggiungi l'header Authorization con il token JWT
      },
      body: JSON.stringify({ price }),
    });

    if (!response.ok) {
      throw new Error("Failed to create checkout session");
    }

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error("URL non trovato nella risposta");
    }

    dispatch({ type: "CREATE_CHECKOUT_SESSION_SUCCESS" });
  } catch (error) {
    dispatch({
      type: "CREATE_CHECKOUT_SESSION_FAIL",
      payload: error.message,
    });
  }
};
