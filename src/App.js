import React from "react";
import DataTable from "react-data-table-component";
import "./styles.css";
import downline from "./dummy/downline";

const colors = require("tailwindcss/colors");

const columns = [
  {
    id: 1,
    name: "Upline Agent Code",
    selector: (row) => row.UplineAgentCode,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Downline Agent Code",
    selector: (row) => row.DownlineAgentCode,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "Downline Level",
    selector: (row) => row.DownlineLevel,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 4,
    name: "IN Base Shop Ind",
    selector: (row) => row.InBaseShopInd,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 5,
    name: "Upline Agent Email",
    selector: (row) => row.UplineAgentEmail,
    sortable: true,
    right: true,
    reorder: true,
    cell: (row) => (
      <a href="mailto:{row.UplineAgentEmail}">{row.UplineAgentEmail}</a>
    )
  },
  {
    id: 6,
    name: "Downline Agent Email",
    selector: (row) => row.DownlineAgentEmail,
    sortable: true,
    right: true,
    reorder: true
  }
];

const conditionalRowStyles = [
  {
    when: (row) => row.DownlineLevel >= 2,
    style: {
      backgroundColor: "emerald-900",
      color: "white",
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  // You can also pass a callback to style for additional customization
  {
    when: (row) => row.calories < 400,
    style: (row) => ({ backgroundColor: row.isSpecial ? "pink" : "inerit" })
  }
];

function Downline() {
  return (
    <div className="App">
      <DataTable
        title="Downline"
        columns={columns}
        data={downline}
        defaultSortFieldId={1}
        pagination
        selectableRows
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}
export default Downline;