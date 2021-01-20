import React, { useState, useEffect } from "react";
import Logo from "../public/logo.js";
import anime from "animejs";

const Loading = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    anime({
      targets: "path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutExpo",
      direction: "alternate",
      duration: 1000,
      delay: 250,
      endDelay: 350,
    });
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loading" style={{ opacity: isMounted ? 1 : 0 }}>
      <Logo fill={props.color} style={{ width: "100%" }} />
    </div>
  );
};

export default Loading;
