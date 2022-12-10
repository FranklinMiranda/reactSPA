import React from "react";

// Simple Functional Component for a Table Header
const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

// Simple Functional Component for a Table Body
const TableBody = () => {
    return <tbody/>
}

// React Component for a Table
class Table extends React.Component {
    render() {
        return (
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
        )
    }
}

// Exporting Table Component as the default export
export default Table

