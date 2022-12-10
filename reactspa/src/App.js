import React from "react";
import Table from "./Table.logical"

// The characters variable is being passed through to the Table Component using a attribute characterData and the Table Component has to be setup on the Table.logical file
class App extends React.Component {
    render() {
        const characters = [
            {name: "Franklin", job: "Software Engineer"}, {name: "Anna", job: "Mechanical Engineer"}, {name: "Charlie", job: "Bartender"}, {name: "Dennis", job: "Engineer"}
        ]

        return (
            <div className="App">
                <h1>React Single Page Application</h1>
                <div className="container-Table">
                    <Table characterData={characters}/> 
                </div>
            </div>
        )
    }
}

export default App

