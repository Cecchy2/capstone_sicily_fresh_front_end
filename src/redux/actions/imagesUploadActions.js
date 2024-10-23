export const UPLOAD_AVATAR = "UPLOAD_AVATAR";

const local = `http:////localhost:3001`;
const prod = `https://occupational-rubia-cecchy-98f537b0.koyeb.app`;

export const uploadAvatar = (avatar) => {
  return async (dispatch) => {
    const baseEndPoint = `${local}/utenti/me`;
    const token = localStorage.getItem("authToken");
    const formData = new FormData();
    formData.append("avatar", avatar);

    try {
      const resp = await fetch(baseEndPoint, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!resp.ok) {
        throw new Error(`Failed to update avatar: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      console.log("Avatar modificato" + result);
      dispatch({ type: UPLOAD_AVATAR, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};
