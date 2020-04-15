import React, { Component } from "react"

import {
    Answer,
    AnswersWrapper as Answers,
    QuestionContainer as Container,
    QuestionText,
    QuestionTextWrapper as QuestionWrapper,
} from "./Question.styled"

export default class Question extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isChoiceSelected: false,
            question: this.props.question
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            question: nextProps.question
        })
    }

    render() {
        let { choices, title } = this.state.question
        let { isChoiceSelected } = this.state

        return (
            <Container>
                <QuestionWrapper>
                    <QuestionText>{title}</QuestionText>
                </QuestionWrapper>
                <Answers>
                    {
                        choices.map((choice, i) => {
                            return (
                                <Answer
                                    className={isChoiceSelected ? "selected" : ""}
                                    onClick={this.setChoice}
                                    name={i}
                                    key={i}
                                >{choice}</Answer>
                            )
                        })
                    }
                </Answers>
            </Container>
        )
    }

    setChoice = e => {
        this.setState({
            isChoiceSelected: true
        })

        let selectedAnswer = Number(e.currentTarget.attributes.name.value)
        this.props.setChoice(selectedAnswer)
    }
}