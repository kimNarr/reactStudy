import React from "react";
import "./css/layout.css"
import Header from "./Header";
import Contents from "./Contents";

function App() {
    return(
        <div id="wrap">
            <Header/>
            <Contents />
        </div>
    )
}

export default App;