import React from "react";
import { Card, CardBody } from "reactstrap";

const Video = ({ video }) => {
  return (
    <Card>
      <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
      <CardBody>
        <iframe
          className="video"
          src={video.url}
          title="YouTube video player"
          allowFullScreen
        />

        <p>
          <strong>{video.title}</strong>
        </p>
        <p>{video.description}</p>
      </CardBody>
      {video.comments.length > 0 ? (
        <>
          <h5>Comments:</h5>
          {video.comments.map((comment) => (
            <p key={comment.id}>{comment.message}</p>
          ))}
        </>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default Video;
