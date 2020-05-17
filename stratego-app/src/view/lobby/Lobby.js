import React from "react";
import { NavLink } from "react-router-dom";

export const Lobby = () => {
  return (
    <>
      <div className="ui center aligned container mb-40">
        <h1 className="ui header">Várakozó szoba</h1>
      </div>
      <div className="">
        <div class="ui top attached header">Szobaszám: XXXX</div>
        <div class="ui attached segment">
        Várakozás az ellenfélre...
        </div>
        <div class="ui bottom attached header">
            <NavLink className="ui teal button" to="/">
              Vissza
            </NavLink>
          </div>
      </div>
    </>
  );
};