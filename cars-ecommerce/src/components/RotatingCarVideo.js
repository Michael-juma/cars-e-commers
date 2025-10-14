import React, { useEffect, useRef, useState } from "react";
import "../styles/RotatingCarVideo.css";

// Pass an array of video URLs
export default function RotatingCarVideo({ videos = [], interval = 8000 }) {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videos.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % videos.length);
    }, interval);
    return () => clearInterval(timer);
  }, [videos, interval]);

  // Fade in effect
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.classList.remove("fade-in");
      // force reflow
      void videoRef.current.offsetWidth;
      videoRef.current.classList.add("fade-in");
    }
  }, [current]);

  if (!videos.length) return null;

  return (
    <div className="rotating-car-video-bg">
      <video
        key={videos[current]}
        ref={videoRef}
        src={videos[current]}
        className="rotating-car-video"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Rotating car video"
        style={{ maxWidth: "100%", borderRadius: "1.2rem" }}
      />
    </div>
  );
}
