import React, { useEffect } from 'react';
import Logo from '../public/logo.svg';
import anime from 'animejs';

const Loading = () => {
  useEffect(() => {
    anime({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
    });
  }, [])
  return (
    <div className="loading">
      <Logo />
    </div>
  );
}


export default Loading;