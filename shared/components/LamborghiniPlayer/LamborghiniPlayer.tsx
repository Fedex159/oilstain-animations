"use client";

import { useCallback, useEffect, useRef } from "react";
import { SC } from "./LamborghiniPlayer.styles";

const VIDEOS = [
  "/assets/videos/videoLamborghini1.mp4",
  "/assets/videos/videoLamborghini2.mp4",
  "/assets/videos/videoLamborghini3.mp4",
  "/assets/videos/videoLamborghini4.mp4",
  "/assets/videos/videoLamborghini5.mp4",
];

const ACTIVE_ATTRIBUTE = "data-active";

export const LamborghiniPlayer = () => {
  const videoPlayer1Ref = useRef<HTMLVideoElement>(null);
  const videoPlayer2Ref = useRef<HTMLVideoElement>(null);
  const currentVideoRef = useRef(0);

  const getPlayers = useCallback(() => {
    const videoPlayer1 = videoPlayer1Ref.current;
    const videoPlayer2 = videoPlayer2Ref.current;

    const activePlayer = videoPlayer1?.hasAttribute(ACTIVE_ATTRIBUTE)
      ? videoPlayer1
      : videoPlayer2;

    const hiddenPlayer = videoPlayer1?.hasAttribute(ACTIVE_ATTRIBUTE)
      ? videoPlayer2
      : videoPlayer1;

    return { activePlayer, hiddenPlayer };
  }, []);

  const handleInit = useCallback(() => {
    const { activePlayer, hiddenPlayer } = getPlayers();
    const currentVideo = currentVideoRef.current;

    if (!activePlayer || !hiddenPlayer) return;

    activePlayer.src = VIDEOS[currentVideo];
    activePlayer.load();
    activePlayer.play().catch(() => {});
    activePlayer.setAttribute("style", "opacity: 1");
    activePlayer.setAttribute(ACTIVE_ATTRIBUTE, "true");

    hiddenPlayer.src = VIDEOS[currentVideo + 1];
    hiddenPlayer.setAttribute("style", "opacity: 0");
  }, [getPlayers]);

  const handleNextVideo = useCallback(() => {
    const currentVideo = currentVideoRef.current;
    const { activePlayer, hiddenPlayer } = getPlayers();

    if (!activePlayer || !hiddenPlayer) return;

    const nextPreload = (currentVideo + 2) % VIDEOS.length;
    const nextCurrent = (currentVideo + 1) % VIDEOS.length;

    // Update active player to preload next video
    activePlayer.setAttribute("style", "opacity: 0");
    activePlayer.removeAttribute(ACTIVE_ATTRIBUTE);
    activePlayer.src = VIDEOS[nextPreload];

    // Play preloaded video
    hiddenPlayer.setAttribute("style", "opacity: 1");
    hiddenPlayer.setAttribute(ACTIVE_ATTRIBUTE, "true");
    hiddenPlayer.play().catch(() => {});

    currentVideoRef.current = nextCurrent;
  }, [getPlayers]);

  useEffect(handleInit, [handleInit]);

  return (
    <SC.Container>
      <SC.Video
        {...{ [ACTIVE_ATTRIBUTE]: "true" }}
        onEnded={handleNextVideo}
        preload="auto"
        ref={videoPlayer1Ref}
      />
      <SC.Video
        onEnded={handleNextVideo}
        preload="auto"
        ref={videoPlayer2Ref}
      />
    </SC.Container>
  );
};
