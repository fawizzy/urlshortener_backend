import { URL } from "url";

export const isValidUrl = (inputUrl: string) => {
  try {
    const parsedUrl = new URL(inputUrl);
    return true;
  } catch (error) {
    return false;
  }
};
