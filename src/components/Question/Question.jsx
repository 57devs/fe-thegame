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
    }

    render() {
        return (
            <Container>
                <QuestionWrapper>
                    <QuestionText>Asagidakilerden hangisidir?</QuestionText>
                </QuestionWrapper>
                <Answers>
                    <Answer>A) Yalnız I</Answer>
                    <Answer>B) I ve II</Answer>
                    <Answer>C) Hepsi</Answer>
                    <Answer>D) Hiçbiri</Answer>
                </Answers>
            </Container>
        )
    }
}