import React, { useState } from "react";

import { Button, Input, InputGroup, InputGroupText } from "reactstrap";

import { addVideo } from "../modules/videoManager";

import "../styles/VideoForm.css";

const VideoForm = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <form>
      <h3>Upload a Video</h3>
      <InputGroup className="form__field">
        <InputGroupText className="field__label">Title</InputGroupText>
        <Input
          required
          placeholder="A Witty Video Title"
          value={videoTitle}
          onChange={(evt) => {
            setVideoTitle(evt.target.value);
          }}
        />
      </InputGroup>

      <InputGroup className="form__field">
        <InputGroupText className="field__label">Description</InputGroupText>
        <Input
          type="textarea"
          placeholder="This is my review of..."
          name="video-description"
          value={videoDescription}
          onChange={(evt) => {
            setVideoDescription(evt.target.value);
          }}
        />
      </InputGroup>

      <InputGroup className="form__field">
        <InputGroupText className="field__label">Url</InputGroupText>
        <Input
          required
          placeholder="https://www.youtube.com/..."
          type="text"
          name="video-url"
          value={videoUrl}
          onChange={(evt) => {
            setVideoUrl(evt.target.value);
          }}
        />
      </InputGroup>

      <div className="form__field">
        {
          // only allow the button to be active if the user inputs a title + url
          videoTitle && videoUrl ? (
            <Button
              color="success"
              onClick={() =>
                addVideo({
                  Title: videoTitle,
                  Description: videoDescription,
                  Url: videoUrl,
                  DateCreated: Date.now(),
                })
              }
            >
              Submit
            </Button>
          ) : (
            <Button disabled>Submit</Button>
          )
        }
      </div>
    </form>
  );
};

export default VideoForm;
