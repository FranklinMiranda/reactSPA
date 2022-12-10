import React from "react";
import Table from "./Table.logical"

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>React Single Page Application</h1>
                <div className="container-Table">
                    <Table/>
                </div>
            </div>
        )
    }
}

export default App

