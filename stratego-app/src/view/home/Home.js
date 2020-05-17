import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="ui center aligned container mb-40">
        <h1 className="ui header">Stratego Online</h1>
        <p>Szerezd meg egy jó stratégiával az ellenfél zászlóját!</p>
      </div>

      <div class="ui middle aligned center aligned grid two column">
      <div class="column">
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="text" name="code" placeholder="Kód" />
              </div>
            </div>
            <NavLink className="ui fluid large teal submit button" to="/prepare">
              Csatlakozás
            </NavLink>
          </div>

          <div class="ui error message"></div>

        </form>

        <div class="ui message">
          <NavLink className="item" to="/lobby">
            Új szoba létrehozása
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};