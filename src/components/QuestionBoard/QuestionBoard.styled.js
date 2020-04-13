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
`

const QuestionResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.correctAnswer ? theme.colors.success : theme.colors.error};
    color: #fff;
    font-size: 24px;
`

export {
    QuestionBoard,
    QuestionResult
}