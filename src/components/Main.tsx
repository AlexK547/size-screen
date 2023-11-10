import React, { useState } from 'react'

export default function Main() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const handleSize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <main>
      <h1>Размер окна</h1>
      <div className='size__text'>Высота - <b>{height}px</b></div>
      <div className='size__text'>Ширина - <b>{width}px</b></div>
      <button type='button' onClick={handleSize}>Определить размер</button>
    </main>
  );
}
