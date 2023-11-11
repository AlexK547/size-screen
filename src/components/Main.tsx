import React, { useEffect, useState } from "react";

export default function Main() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [screenHeight, setScreenHeight] = useState(window.screen.height);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
  }, []);

  const handleSize = () => {
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
  };

  return (
    <main>
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>Размер</th>
              <th>Ширина, px</th>
              <th>Высота, px</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Размер экрана</td>
              <td>
                <b>{screenWidth}</b>
              </td>
              <td>
                <b>{screenHeight}</b>
              </td>
            </tr>
            <tr>
              <td>Размер окна</td>
              <td>
                <b>{innerWidth}</b>
              </td>
              <td>
                <b>{innerHeight}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
