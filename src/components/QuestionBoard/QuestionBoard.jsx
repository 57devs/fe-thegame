import React, { Component } from "react"

import { Question } from "../"

import { QuestionBoard as Container, Timer } from "./QuestionBoard.styled"

export default class QuestionBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: {
                "question": "Asagidakilerden hangisi?",
                "options": [
                    {
                        "A": "Bu",
                        "B": "Yok bu",
                        "C": "Bence bu",
                        "D": "No, u"
                    }
                ],
                "answer": "B"
            },
            questionNumber: 0,
            maxTime: 15,
            remainingTime: 0,
        }
    }

    componentDidMount() {
        this.setState({
            remainingTime: this.state.maxTime
        }, () => {
            this.chronometer()
        })
    }

    render() {
        let { remainingTime, maxTime } = this.state

        return (
            <Container>
                <Timer duration={maxTime}>{remainingTime}</Timer>
                <Question />
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
                clearInterval(timeInterval)
            }
        }, 1000)
    }
}