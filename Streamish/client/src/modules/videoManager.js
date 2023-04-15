const baseUrl = "/api/video";

export const getAllVideos = () => {
  return fetch(`${baseUrl}/getwithcomments`).then((res) => res.json());
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

export const searchVideos = (searchTerms, sortDescBool) => {
  return fetch(
    `${baseUrl}/search?q=${searchTerms}&sortDesc=${sortDescBool}`
  ).then((res) => res.json());
};