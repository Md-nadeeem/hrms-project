const getAccessTokenFromCookie = () => {
  // Check if document is defined (i.e., if the code is running in the client-side environment)
  if (typeof document !== 'undefined') {
    // Replace 'accessToken' with the name of your cookie containing the access token
    const cookie = document.cookie;

    if (!cookie) {
      // If the cookie is empty or undefined, return null or an appropriate default value
      return null;
    }

    const accessToken = cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];

    return accessToken || null; // Return null if the accessToken is not found
  }

  // If document is not defined (i.e., if the code is running in the server-side environment), return null
  return null;
};

export const removeAccessToken = () => {
  // Check if document is defined (i.e., if the code is running in the client-side environment)
  if (typeof document !== 'undefined') {
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }
};

export default getAccessTokenFromCookie;
