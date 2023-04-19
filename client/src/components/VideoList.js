import React, { useEffect, useState } from "react";

import Video from "./Video";
import { getAllVideos, searchVideos } from "../modules/videoManager";

import { Button, Input, InputGroup, InputGroupText } from "reactstrap";

import "../styles/VideoList.css";

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
      <div className="search__container">
        <InputGroup>
          <InputGroupText>Search</InputGroupText>
          <Input
            name="search-bar"
            type="text"
            value={searchTerms}
            onChange={(evt) => {
              setSearchTerms(evt.target.value);
            }}
          />
          <InputGroupText>
            Descending?
            <Input
              type="checkbox"
              id="sort-descending__checkbox"
              onChange={(evt) => {
                setSortDesc(evt.target.checked);
              }}
            />
          </InputGroupText>
        </InputGroup>
        {searchTerms ? (
          <Button
            className="search__button"
            color="primary"
            onClick={() =>
              searchVideos(searchTerms, sortDesc).then((res) => setVideos(res))
            }
          >
            Go!
          </Button>
        ) : (
          <Button disabled className="search__button">
            Go!
          </Button>
        )}
      </div>

      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
