import React from "react";
import {
    Link,
    useSearchParams,
  } from "react-router-dom";
import ReactHlsPlayer from 'react-hls-player';

export default function() {
  const playerRef = React.useRef();
  let [searchParams, setSearchParams] = useSearchParams();
  const videoURL = searchParams.get("videoURL");
  return (
    <div><Link to="/main_window">Go Home</Link>
    <ReactHlsPlayer
    autoPlay={true}
    controls={true}
    width="100%"
    height="auto"
    playerRef={playerRef}
    src={videoURL}
  />,
    </div>
  )
}
