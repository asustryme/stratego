import React, { Component } from 'react'

export default class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: 10
        }
      }
      render(){
        let rows = [];
        for (var i = 0; i < this.state.size; i++){
          let rowID = `row${i}`
          let cell = []
          for (var idx = 0; idx < this.state.size; idx++){
            let cellID = `cell${i}-${idx}`
            cell.push(<td key={cellID} id={cellID}></td>)
          }
          rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        }
        return(
            <table className="ui very basic collapsing celled table auto-margin game-table">
              <tbody>
                {rows}
              </tbody>
            </table>
        )
      }
}