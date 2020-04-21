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

        this.ws = new WebSocket(`ws://192.168.0.17:8000/ws/${this.props.match.params.id}`)
    }

    componentDidMount() {
        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data)
            let { questions, started } = this.state

            if (!questions) {
                this.setState({
                    createdBy: message.created_by,
                    gameName: message.game_name,
                    questions: message.questions,
                    players: message.players,
                    started: message.started,
                })
            }

            if (message.started !== started) {
                this.setState({
                    started: message.started
                })
            }
        }
    }

    componentWillUnmount() {
        this.ws.close()
    }

    render() {
        let { createdBy, currentQuestion, gameName, questions, players, started, username } = this.state

        if (started) {
            return (
                <QuestionBoard
                    ws={this.ws}
                    gameId={this.props.match.params.id}
                    nextQuestion={this.nextQuestion}
                    question={questions[currentQuestion]}
                    questionIndex={currentQuestion}
                />
            )
        } else return (
            <Lobby
                gameInfo={{
                    createdBy: createdBy,
                    gameId: this.props.match.params.id,
                    gameName: gameName,
                    players: players,
                    username: username
                }}
                startGame={this.startGame}
            />
        )
    }

    startGame = () => {
        this.ws.send("started")
    }

    nextQuestion = () => {
        if (!this.state.currentQuestion + 1) this.ws.close()
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
    }
}