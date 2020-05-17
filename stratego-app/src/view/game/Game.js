import React from "react";
import { NavLink } from "react-router-dom";
import Table from '../components/Table';

export const Game = () => {
  return (
    <>
      <div className="ui center aligned container mb-40">
        <h1 className="ui header">Játék oldal</h1>
      </div>
      <div class="ui two column stackable center aligned grid segment">
        <div class="column">
          <div class="teal ui button">Te</div>
        </div>
        <div class="ui vertical divider">VS</div>
        <div class="column">
          <div class="ui button">Ellenfél</div>
        </div>
      </div>
      <div className="">
        <div class="ui attached segment">
          <Table></Table>
        </div>
      </div>
    </>
  );
};