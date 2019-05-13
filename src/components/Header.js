import React from 'react';
import dogPic from '../assets/doggie.jpg';

export default function Header() {
  return (
    <header>
      <h1>My Cool Dog</h1>
      <img src={dogPic} style={{ width: '200px' }} />
    </header>
  );
}
