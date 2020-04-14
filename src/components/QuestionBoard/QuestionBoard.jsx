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
            isQuestionAnswered: false,
            answers: [],
            showResult: false
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
        let { gameEnded, isAnswerCorrect, remainingTime, maxTime, question, showResult } = this.state

        if (gameEnded) return <Redirect to={`/game/${this.props.gameId}/result`} />
        return (
            <Container>
                {
                    showResult ?
                        <QuestionResult isAnswerCorrect={isAnswerCorrect}>{isAnswerCorrect ? "Doğru" : "Yanlış"}</QuestionResult> :
                        <React.Fragment>
                            <Timer remainingTime={remainingTime} maxTime={maxTime} />
                            <Question setChoice={this.setChoice} question={question} />
                        </React.Fragment>
                }
            </Container>
        )
    }

    chronometer() {

        let timeInterval = setInterval(() => {
            let { remainingTime } = this.state
            if (remainingTime > 0) {
                this.setState({
                    remainingTime: remainingTime - 1,
                })
            } else {
                this.setState({
                    showResult: true
                }, () => {
                    setTimeout(() => {
                        this.props.nextQuestion()
                        this.setState({
                            isQuestionAnswered: false,
                            showResult: false
                        })

                    }, 3000)

                    clearInterval(timeInterval)
                })
            }
        }, 1000)
    }

    setChoice = selectedAnswer => {
        let { answers, isQuestionAnswered, question, questionIndex } = this.state

        if (isQuestionAnswered) return

        let newAnswers = answers.concat({
            question: questionIndex,
            choice: selectedAnswer,
            correct: question.correct_choice === selectedAnswer
        })

        this.setState({
            answers: newAnswers,
            isAnswerCorrect: question.correct_choice === selectedAnswer,
            isQuestionAnswered: true
        })
    }
}