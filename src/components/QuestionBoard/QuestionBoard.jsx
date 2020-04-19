import React, { Component } from "react"
import { Redirect } from "react-router-dom"

import { Question, Timer } from "../"

import { QuestionBoard as Container, QuestionResult } from "./QuestionBoard.styled"
import { request } from "../../request"

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
            scoreData: {
                total_score: 0,
                actions: []
            },
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
            let username = localStorage.getItem("username")
            let { scoreData } = this.state
            scoreData.total_score = scoreData.actions.reduce((a, b) => ({ score: a.score + b.score })).score

            this.setState({
                gameEnded: true
            })
            request("POST", `games/${this.props.gameId}/players/${username}/score`, scoreData)
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
        let { gameEnded, isAnswerCorrect, maxTime, question, questionIndex, remainingTime, showResult } = this.state

        if (gameEnded) return <Redirect to={`/game/${this.props.gameId}/result`} />
        return (
            <Container>
                {
                    showResult ?
                        <QuestionResult isAnswerCorrect={isAnswerCorrect}>{isAnswerCorrect ? "Doğru" : "Yanlış"}</QuestionResult> :
                        <React.Fragment>
                            <Timer remainingTime={remainingTime} maxTime={maxTime} />
                            <Question setChoice={this.setChoice} question={question} questionIndex={questionIndex} />
                        </React.Fragment>
                }
            </Container>
        )
    }

    chronometer = () => {
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
        let { answers, isQuestionAnswered, maxTime, question, questionIndex, remainingTime, scoreData } = this.state
        if (isQuestionAnswered) return

        let newAnswers = answers.concat({
            choice: selectedAnswer,
            correct: question.correct_choice === selectedAnswer,
            question: questionIndex,
            spentTime: maxTime - remainingTime
        })

        let updatedActions = scoreData.actions.concat({
            q_id: question.q_id,
            response_time: maxTime - remainingTime,
            is_correct: question.correct_choice === selectedAnswer,
            score: this.calculateQuestionPoint(question.difficulty, question.correct_choice === selectedAnswer, questionIndex, remainingTime)
        })
        scoreData.actions = updatedActions

        this.setState({
            answers: newAnswers,
            isAnswerCorrect: question.correct_choice === selectedAnswer,
            isQuestionAnswered: true,
            scoreData: scoreData
        })
    }

    calculateQuestionPoint = (difficulty, isCorrect, questionIndex, remainingTime) => {
        if (!isCorrect) return 0
        return Number((difficulty * questionIndex) + (remainingTime * questionIndex * 1.1).toFixed(1))
    }
}