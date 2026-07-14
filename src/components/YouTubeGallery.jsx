import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const getVideoId = (urlOrId) => {
  if (!urlOrId) return "";
  if (!urlOrId.includes("/") && !urlOrId.includes(".")) return urlOrId;

  try {
    const url = new URL(urlOrId);
    if (url.hostname === "youtu.be") return url.pathname.slice(1);
    if (url.pathname.startsWith("/shorts/")) return url.pathname.split("/")[2];
    if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2];
    return url.searchParams.get("v") || "";
  } catch {
    return "";
  }
};

export const YouTubeGallery = ({ videos }) => {
  const playableVideos = videos
    .map((video) => ({ ...video, id: getVideoId(video.url) }))
    .filter((video) => video.id);
  const [selectedId, setSelectedId] = useState(playableVideos[0]?.id);
  const selectedVideo = playableVideos.find((video) => video.id === selectedId);

  if (!selectedVideo) return null;

  return (
    <Paper className="youtube-gallery" elevation={3}>
      <div className="youtube-gallery__player">
        <iframe
          key={selectedVideo.id}
          src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}`}
          title={selectedVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="youtube-gallery__controls" aria-label="Choose a video">
        {playableVideos.slice(0, 4).map((video, index) => (
          <button
            className={video.id === selectedVideo.id ? "is-selected" : ""}
            key={video.id}
            onClick={() => setSelectedId(video.id)}
            type="button"
            aria-pressed={video.id === selectedVideo.id}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
              alt=""
              loading="lazy"
            />
            <span>
              {video.title}
            </span>
          </button>
        ))}
      </div>
    </Paper>
  );
};
