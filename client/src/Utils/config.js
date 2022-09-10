
export const getConfig = () => {
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    return config
}



export const getAuthConfig = () => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
    return config
}
