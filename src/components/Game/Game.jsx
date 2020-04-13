import React, { Component } from "react"

import { Lobby, QuestionBoard } from "../index"

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            createdBy: null,
            currentQuestion: 0,
            gameName: null,
            gameStarted: false,
            questions: null,
            players: null,
            started: null,
            username: localStorage.getItem("username")
        }

        this.ws = new WebSocket(`ws://localhost:8000/ws/${this.props.match.params.id}`)
    }

    componentDidMount() {
        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data)

            this.setState({
                questions: message.questions,
                players: message.players,
                gameName: message.game_name,
                createdBy: message.created_by,
                started: message.started,
            })
        }
    }

    render() {
        let { createdBy, currentQuestion, gameName, questions, players, started, username } = this.state

        if (started) return <QuestionBoard gameId={this.props.match.params.id} question={questions[currentQuestion]} nextQuestion={this.nextQuestion} questionIndex={currentQuestion} />
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

    nextQuestion = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
    }
}