import React, { Component } from "react"
import { Redirect } from "react-router-dom"

import { Question, Timer } from "../"

import { QuestionBoard as Container, QuestionResult } from "./QuestionBoard.styled"

export default class QuestionBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: this.props.question,
            questionIndex: this.props.questionIndex,
            maxTime: 15,
            remainingTime: 0,
            gameEnded: false,
            isAnswerCorrect: false,
            answers: []
        }
    }

    componentDidMount() {
        this.setState({
            remainingTime: this.state.maxTime
        }, () => {
            this.chronometer()
        })
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.question) {
            this.setState({
                gameEnded: true
            })

            return
        }

        if (this.state.question.title !== nextProps.question.title) {
            this.setState({
                question: nextProps.question,
                remainingTime: this.state.maxTime,
                questionIndex: nextProps.questionIndex
            }, () => {
                this.chronometer()
            })
        }
    }

    render() {
        let { gameEnded, remainingTime, maxTime, question } = this.state

        if (gameEnded) return <Redirect to={`/game/${this.props.gameId}/result`} />
        return (
            <Container>
                {
                    remainingTime > 0 ?
                        <Timer remainingTime={remainingTime} maxTime={maxTime} /> :
                        <div style={{ height: "18px", margin: "0 0 10px 0" }} />
                }
                <Question setChoice={this.setChoice} question={question} />
            </Container>
        )
    }

    chronometer() {
        let timeInterval = setInterval(() => {
            if (this.state.remainingTime > 0) {
                this.setState({
                    remainingTime: this.state.remainingTime - 1,
                })
            } else {
                this.props.nextQuestion()
                clearInterval(timeInterval)
            }
        }, 1000)
    }

    setChoice = selectedAnswer => {
        let newAnswers = this.state.answers.concat({
            question: this.state.questionIndex,
            choice: selectedAnswer,
            correct: this.state.question.correct_choice === selectedAnswer
        })

        this.setState({
            answers: newAnswers,
            isAnswerCorrect: this.state.question.correct_choice === selectedAnswer
        }, console.log(this.state))
    }
}