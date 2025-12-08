import type { OurFileRouter } from "@dealort/api/routers/uploadthing";
import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

const serverUrl = `${import.meta.env.VITE_SERVER_URL}/api/uploadthing`;

// Only include credentials for requests to our own server, not UploadThing's CDN
const customFetch = (
  input: string | URL | Request,
  options?: RequestInit
): Promise<Response> => {
  let urlString: string;
  if (typeof input === "string") {
    urlString = input;
  } else if (input instanceof URL) {
    urlString = input.toString();
  } else {
    urlString = input.url;
  }
  const isOurServer = urlString.includes(serverUrl);

  return fetch(input, {
    ...options,
    credentials: isOurServer ? "include" : "omit", // Only include cookies for our server
  });
};

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>({
    url: serverUrl,
    fetch: customFetch,
  });

export const UploadButton = generateUploadButton<OurFileRouter>({
  url: serverUrl,
  fetch: customFetch,
});

export const UploadDropzone = generateUploadDropzone<OurFileRouter>({
  url: serverUrl,
  fetch: customFetch,
});
