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

    @media (min-width: 320px) and (max-width: 480px) {
        border-radius: 2.5px;
        padding: 0 5px;
    }
`

const QuestionText = styled.p`
    font-size: 22px;
    color: #fff;
    cursor: default;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 14px;
    }
`

const AnswersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
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

    @media (min-width: 320px) and (max-width: 480px) {
        margin: 5px 0;
        padding: 5px;
        flex: 1;
        border-radius: 2.5px;
        font-size: 14px;
        align-self: stretch;

        &:last-of-type {
            background-color: #12532a;
            margin-bottom: 0;
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
    }
`

export {
    Answer,
    AnswersWrapper,
    QuestionContainer,
    QuestionText,
    QuestionTextWrapper
}