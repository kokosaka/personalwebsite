import React, { useEffect } from 'react';
import Logo from '../public/logo.js';
import anime from 'animejs';

const Loading = (props) => {
  useEffect(() => {
    anime({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      direction: 'alternate',
      duration: 1000,
      delay: 250,
      endDelay: 350,
    });
  }, [])
  return (
    <div className="loading">
      <Logo fill={props.color}/>
    </div>
  );
}


export default Loading;