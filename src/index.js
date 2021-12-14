import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import { BrowserRouter as Router , HashRouter as Router2} from "react-router-dom"

//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router2>
      <TodoContainer />
    </Router2>
  </React.StrictMode>,
  document.getElementById("root")
)