import styled from "styled-components"

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-self: stretch;

    color: #fff;
`

const QuestionTextWrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    border: 1px solid #cecece;
    border-radius: 5px;
    padding: 0 10px;
`

const QuestionText = styled.p`
    font-size: 22px;
    color: #fff;
    cursor: default;
`

const AnswersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
`

const Answer = styled.div`
    display: flex;
    padding: 10px;
    margin: 10px 10px 0 0;
    flex: 1 0 40%;
    align-items: center;

    box-sizing: border-box;
    border: 1px solid #cecece;
    border-radius: 5px;

    cursor: pointer;
    font-size: 22px;
    opacity: .8;

    &:hover {
        opacity: 1;
    }

    &:last-of-type {
        margin-right: 0;
        background-color: #12532a;
    }

    &:nth-of-type(2n) {
        margin-right: 0;
    }

    &:nth-of-type(1) {
        background-color: #b00b69;
    }
    
    &:nth-of-type(2) {
        background-color: #d1c122;
    }

    &:nth-of-type(3) {
        background-color: #531251;
    }
`

export {
    Answer,
    AnswersWrapper,
    QuestionContainer,
    QuestionText,
    QuestionTextWrapper
}