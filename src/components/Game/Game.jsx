import React, { Component } from "react"

import { Lobby, QuestionBoard } from "../index"

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameStarted: false
        }
    }

    render() {
        let { gameStarted } = this.state

        if (gameStarted) return <QuestionBoard />
        return <Lobby />
    }
}