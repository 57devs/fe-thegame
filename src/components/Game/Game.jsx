import React, { Component } from "react"

import { Lobby, QuestionBoard } from "../index"

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameStarted: false,
            questions: null,
            players: null,
            gameName: null,
            createdBy: null,
            started: null,
            username: localStorage.getItem("username")
        }

        this.ws = new WebSocket(`ws://localhost:8000/ws/${this.props.match.params.id}`)
    }

    componentDidMount() {
        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data)
            console.log(message)

            this.setState({
                questions: message.questions,
                players: message.players,
                gameName: message.game_name,
                createdBy: message.created_by,
                started: message.started
            })
        }
    }

    render() {
        let { createdBy, gameName, questions, players, started, username } = this.state

        if (started) return <QuestionBoard questions={questions} />
        return (
            <Lobby
                gameInfo={{
                    createdBy: createdBy,
                    gameName: gameName,
                    players: players,
                    username: username,
                    gameId: this.props.match.params.id
                }}
                startGame={this.startGame}
            />
        )
    }

    startGame = () => {
        this.ws.send("started")
    }
}