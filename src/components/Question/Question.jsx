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
            question: this.props.question
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            question: nextProps.question
        })
    }

    render() {
        let { title, choices } = this.state.question

        return (
            <Container>
                <QuestionWrapper>
                    <QuestionText>{title}</QuestionText>
                </QuestionWrapper>
                <Answers>
                    {
                        choices.map((choice, i) => <Answer key={i}>{choice}</Answer>)
                    }
                </Answers>
            </Container>
        )
    }
}