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
            username: localStorage.getItem("username")
        }

        this.ws = new WebSocket(`ws://localhost:8000/ws/${this.props.match.params.id}`)
    }


    componentDidMount() {
        this.ws.onopen = () => {
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            console.log('new message is received', evt)
            const message = JSON.parse(evt.data)

            this.setState({
                questions: message.questions,
                players: message.players,
                gameName: message.game_name,
                createdBy: message.created_by
            })
        }

        this.ws.onclose = () => {
            console.log('disconnected')
        }

        this.ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            this.ws.close();
        };
    }

    render() {
        let { createdBy, gameName, gameStarted, questions, players, username } = this.state

        if (gameStarted) return <QuestionBoard questions={questions} />
        return (
            <Lobby
                gameInfo={{
                    createdBy: createdBy,
                    gameName: gameName,
                    players: players,
                    username: username,
                }}
                startGame={this.startGame}
            />
        )
    }

    startGame = gameStarted => {
        this.setState({ gameStarted })
    }
}