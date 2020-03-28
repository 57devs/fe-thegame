import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Home, QuestionBoard } from "../components"

import { Container } from "./App.styled"

const App = () => {
  return (
    <Router>
      <Container>
        <h1>BORU</h1>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={Home} />
      </Container>
    </Router>
  )
}

export default App