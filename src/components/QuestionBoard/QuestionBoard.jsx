import React, { Component } from "react"
import { Redirect } from "react-router-dom"

import { Question, Timer } from "../"

import { QuestionBoard as Container, QuestionResult } from "./QuestionBoard.styled"

export default class QuestionBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            answers: [],
            gameEnded: false,
            isAnswerCorrect: false,
            isQuestionAnswered: false,
            maxTime: 15,
            question: this.props.question,
            questionIndex: this.props.questionIndex,
            remainingTime: 0,
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

            this.calculateScore()
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
        let { gameEnded, isAnswerCorrect, maxTime, question, remainingTime, showResult } = this.state

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
        let { answers, isQuestionAnswered, question, questionIndex, remainingTime, maxTime } = this.state
        if (isQuestionAnswered) return

        let newAnswers = answers.concat({
            choice: selectedAnswer,
            correct: question.correct_choice === selectedAnswer,
            question: questionIndex,
            spentTime: maxTime - remainingTime
        })

        this.setState({
            answers: newAnswers,
            isAnswerCorrect: question.correct_choice === selectedAnswer,
            isQuestionAnswered: true
        })
    }

    calculateScore = () => {
        let { answers, maxTime, questionIndex } = this.state

        const MAX_SCORE = 1000,
            CORRECT_ANSWER_COEFFICENT = 0.6,
            TIME_COEFFICENT = 0.4,

        const MAX_SCORE_CORRECT_ANSWER_RATIO = MAX_SCORE * CORRECT_ANSWER_COEFFICENT,
            MAX_SCORE_SPENT_TIME_RATIO = MAX_SCORE * TIME_COEFFICENT

        let questionLength = questionIndex + 1
        let totalTime = maxTime * questionLength

        let pointsPerCorrectAnswer = Math.floor(MAX_SCORE_CORRECT_ANSWER_RATIO / questionLength)
        let pointLossPerSeconds = Number((MAX_SCORE_SPENT_TIME_RATIO / totalTime).toFixed(1))

        let totalSpentTime = answers.reduce((a, b) => ({ spentTime: a.spentTime + b.spentTime }))
        totalSpentTime = totalSpentTime.spentTime

        let totalCorrectAnswer = answers.filter(answer => answer.correct).length

        let earnedPointsByCorrectAnswers = totalCorrectAnswer * pointsPerCorrectAnswer
        let earnedPointsBySpentTime = MAX_SCORE_SPENT_TIME_RATIO - (totalSpentTime * pointLossPerSeconds)

        let score = earnedPointsByCorrectAnswers + earnedPointsBySpentTime

        return score
    }
}