import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { getVideo } from "../modules/videoManager";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    getVideo(id).then(setVideo);
  }, [id]);

  if (!video) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Video video={video} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
