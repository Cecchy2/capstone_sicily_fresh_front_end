export const CREATE_CHECKOUT_SESSION_REQUEST = "CREATE_CHECKOUT_SESSION_REQUEST";
export const CREATE_CHECKOUT_SESSION_SUCCESS = "CREATE_CHECKOUT_SESSION_SUCCESS";
export const CREATE_CHECKOUT_SESSION_FAIL = "CREATE_CHECKOUT_SESSION_FAIL";

export const createCheckoutSession = (price) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CHECKOUT_SESSION_REQUEST });

    const token = localStorage.getItem("authToken");

    const response = await fetch(
      "https://occupational-rubia-cecchy-98f537b0.koyeb.app/stripe/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ price }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create checkout session");
    }

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error("URL non trovato nella risposta");
    }

    dispatch({ type: CREATE_CHECKOUT_SESSION_SUCCESS });
  } catch (error) {
    dispatch({
      type: CREATE_CHECKOUT_SESSION_FAIL,
      payload: error.message,
    });
  }
};
