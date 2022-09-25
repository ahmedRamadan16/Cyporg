import React from "react";
import GameImg1 from "../images/game-01.jpg";
import GameImg2 from "../images/game-02.jpg";
import GameImg3 from "../images/game-03.jpg";
import MainHead from "../components/MainHead";
import { Link } from "react-router-dom";

export default function Library() {
  return (
    <div className="library">
      <div className="library-content">
        <MainHead title="Your Gaming" span="Library" />

        <div className="content">
          <img src={GameImg1} alt="game01" />
          <ul className="list-unstyled">
            <li>
              <div className="info">
                <h2>Data 2</h2>
                <span>Sandbox</span>
              </div>
            </li>
            <li>
              <h2>Date Added</h2>
              <span>24/04/2036</span>
            </li>
            <li>
              <h2>Hours Played</h2>
              <span>634 H 22 Mins</span>
            </li>
            <li>
              <h2>Currently</h2>
              <span>Downloaded</span>
            </li>
            <li>
              <button className="btn btn-pink">Downloaded</button>
            </li>
          </ul>
        </div>
        <div className="content">
          <img src={GameImg2} alt="game02" />

          <ul className="list-unstyled">
            <li>
              <div className="info">
                <h2>Fortnite</h2>
                <span>Sandbox</span>
              </div>
            </li>
            <li>
              <h2>Date Added</h2>
              <span>24/04/2036</span>
            </li>
            <li>
              <h2>Hours Played</h2>
              <span>740 H 22 Mins</span>
            </li>
            <li>
              <h2>Currently</h2>
              <span>Downloaded</span>
            </li>
            <li>
              <button className="btn btn-pink">Downloaded</button>
            </li>
          </ul>
        </div>
        <div className="content">
          <img src={GameImg3} alt="game03" />

          <ul className="list-unstyled">
            <li>
              <div className="info">
                <h2>CS-GO</h2>
                <span>Sandbox</span>
              </div>
            </li>
            <li>
              <h2>Date Added</h2>
              <span>21/04/2036</span>
            </li>
            <li>
              <h2>Hours Played</h2>
              <span>892 H 22 Mins</span>
            </li>
            <li>
              <h2>Currently</h2>
              <span>Downloaded</span>
            </li>
            <li>
              <button className="btn btn-pink">Downloaded</button>
            </li>
          </ul>
        </div>
        <button className="btn btn-pink">
          <Link to="/browse">Discover Popular</Link>
        </button>
      </div>
    </div>
  );
}
