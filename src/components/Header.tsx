import React from "react";
import "../App.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="@planetkeeper">Farcaster</a>
          </li>
          <li>
            <a href="https://twitter.com/planetkeeperDAO">Twitter</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/frames">Frames</a>
          </li>
          <li>
            <a href="https://gitcom.com/PlanetKeepers">GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
