import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/videos/${video.id}`}>
            <strong>{video.title}</strong>
          </Link>
        </p>
        <p>{video.description}</p>
      </CardBody>
      {video.comments != null ? (
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
