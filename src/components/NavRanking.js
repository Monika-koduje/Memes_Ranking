import React from "react";
import { NavLink } from "react-router-dom";

const NavRanking = () => {
  return (
    <div className="hotRegular">
      <ul>
        <li className="hot">
          <NavLink to="/hot">
            HOT <i className="far fa-arrow-alt-circle-up"></i>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li className="regular">
          <NavLink to="/regular">REGULAR</NavLink>
        </li>
      </ul>
      <ul>
        <li className="favourite">
          <NavLink to="/favourite"><span>FAVOURITE</span></NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavRanking;
