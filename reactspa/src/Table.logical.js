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
// Pass through props to the table body as a parameter and map through the array to return a table row for each object in the array
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

// React Component for a Table
// Access the characterData attribute using this.props
class Table extends React.Component {
    render() {
        const {characterData} = this.props

        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData}/>
            </table>
        )
    }
}

// Exporting Table Component as the default export
export default Table

