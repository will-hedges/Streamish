import React, { useEffect, useState } from "react";

import Video from "./Video";
import { getAllVideos, searchVideos } from "../modules/videoManager";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [sortDesc, setSortDesc] = useState(false);

  const getVideos = () => {
    getAllVideos().then((videos) => setVideos(videos));
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    setSearchTerms("");
  }, [videos]);

  useEffect(() => {
    setSortDesc(false);
  }, [videos]);

  return (
    <div className="container">
      <label htmlFor="search-bar">Search:</label>
      <input
        name="search-bar"
        type="text"
        value={searchTerms}
        onChange={(evt) => {
          setSearchTerms(evt.target.value);
        }}
      />
      <label htmlFor="sort-desc-checkbox">Sort Descending:</label>
      <input
        type="checkbox"
        name="sort-desc-checkbox"
        value="desc"
        onChange={(evt) => {
          setSortDesc(evt.target.checked);
        }}
      />
      <button
        onClick={() =>
          searchVideos(searchTerms, sortDesc).then((res) => setVideos(res))
        }
      >
        Go!
      </button>
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
