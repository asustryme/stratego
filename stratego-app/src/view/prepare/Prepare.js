import React from "react";
import { NavLink } from "react-router-dom";
import Table from '../components/Table';

export const Prepare = () => {
  return (
    <>
      <div className="ui center aligned container mb-40">
        <h1 className="ui header">Előkészítő oldal</h1>
      </div>
      <div className="">
        <div className="ui top attached header">Szobaszám: XXXX</div>
        <div className="ui attached segment">
        <div className="ui info message">
          <div className="header">Előkészítő fázis</div>
          <p>Húzd a bal oldalról a játéktérre a bábukat</p>
        </div>
          <div className="ui grid">
            <div className="six wide column">
            <div className="ui divided very relaxed animated list">
              
              <div className="item" style={{ cursor: "pointer"}}>
                <div className="content">
                  <div className="header">Zászló</div>
                  Elérhető: 1
                </div>
              </div>
              <div className="item" style={{ cursor: "pointer"}}>
                <div className="content">
                  <div className="header">Bomba</div>
                  Elérhető: 2
                </div>
              </div>
              <div className="item" style={{ cursor: "pointer"}}>
                <div className="content">
                  <div className="header">Kém</div>
                  Elérhető: 1
                </div>
              </div>
              <div className="item" style={{ cursor: "pointer"}}>
                <div className="content">
                  <div className="header">Felderítő</div>
                  Elérhető: 2
                </div>
              </div>
              <div className="item" style={{ cursor: "pointer"}}>
                <div className="content">
                  <div className="header">Aknász</div>
                  Elérhető: 3
                </div>
              </div>
              <div className="item" style={{ cursor: "pointer"}}>
                <div className="content">
                  <div className="header">4-es</div>
                  Elérhető: 1
                </div>
              </div>
              <div className="item" style={{ cursor: "pointer"}}>
                <div className="content">
                  <div className="header">6-os</div>
                  Elérhető: 1
                </div>
              </div>
              <div className="item" style={{ cursor: "pointer"}}>
                <div className="content">
                  <div className="header">8-as</div>
                  Elérhető: 1
                </div>
              </div>
              <div className="item" style={{ cursor: "pointer"}}>
                <div className="content">
                  <div className="header">10-es</div>
                  Elérhető: 1
                </div>
              </div>

            </div>
            </div>
            <div className="ten wide column">
              <Table></Table>
            </div>
          </div>
          
        </div>
        <div className="ui bottom attached header center aligned">
          <NavLink className="ui teal button" to="/game">
              Játék indítása
            </NavLink>
          </div>
      </div>
    </>
  );
};