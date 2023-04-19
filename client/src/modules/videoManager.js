import firebase from "firebase";
import "firebase/auth";
import { getToken } from "./authManager";

const baseUrl = "/api/video";

export const getAllVideos = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/getwithcomments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get videos."
        );
      }
    });
  });
};

export const addVideo = (video) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new video."
        );
      }
    });
  });
};

export const getVideo = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/withcomments/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get video details."
        );
      }
    });
  });
};

export const searchVideos = (searchTerms, sortDescBool) => {
  return getToken().then((token) => {
    return fetch(
      `${baseUrl}/search?q=${searchTerms}&sortDesc=${sortDescBool}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get video details."
        );
      }
    });
  });
};
