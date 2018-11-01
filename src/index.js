import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import CreateTable from "./Utility/createTable";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "userId", field: "userId" },
        { headerName: "id", field: "id" },
        { headerName: "title", field: "title" },
        { headerName: "body", field: "body" }
      ],
      rowData: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }));
  }

  render() {
    return (
      <div>
        <div
          className="ag-theme-balham"
          style={{ height: "200px", width: "600px" }}
        >
          <AgGridReact
            enableSorting={true}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
