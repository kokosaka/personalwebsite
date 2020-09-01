import React, { useEffect } from 'react';
import Logo from '../public/logo.js';
import anime from 'animejs';

const Loading = () => {
  var color = "#006816";

  useEffect(() => {
    anime({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: 500,
      endDelay: 750,
    });
  }, [])
  return (
    <div className="loading">
      <Logo fill={color}/>
    </div>
  );
}


export default Loading;