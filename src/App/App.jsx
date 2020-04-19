import React from "react"
import { Link, BrowserRouter as Router, Route } from "react-router-dom"

import { Game, GameSettings, Home, Join, Scoreboard } from "../components"

import { Container } from "./App.styled"

const App = () => {
  return (
    <Router>
      <Container>
        <Link to="/"><h1>BORU</h1></Link>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={GameSettings} />
        <Route path="/join" exact component={Join} />
        <Route path="/game/:id/" exact component={Game} />
        <Route path="/game/:id/result" exact component={Scoreboard} />
      </Container>
    </Router>
  )
}

export default App