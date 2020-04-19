import styled from "styled-components"
import { theme } from "../../theme.styled"

const QuestionBoard = styled.div`
    display: flex;
    flex-direction: column;

    width: 80%;
    height: 50%;
    background-color: #0f000f;

    align-self: center;
    margin: auto 0;
    padding: 10px;

    border: 1px solid #acacac;
    border-radius: 5px;
    box-sizing: border-box;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 70%;
        padding: 5px;
        border-radius: 2.5px;
    }
`

const QuestionResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    flex: 1;

    background-color: ${props => props.isAnswerCorrect ? theme.colors.success : theme.colors.error};
    color: #fff;
    font-size: 48px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 24px;
    }
`

export {
    QuestionBoard,
    QuestionResult
}