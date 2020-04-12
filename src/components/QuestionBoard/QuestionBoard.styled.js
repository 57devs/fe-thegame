import styled from "styled-components"

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

const Timer = styled.span`
    display: flex;
    justify-content: flex-end;

    color: #fff;
    background-color: ${props => props.backgroundColor || "green"};
    width: 100%;

    border: 1px solid #fff;
    border-radius: 5px;
    margin: 0 0 10px 0;
    padding: 0 5px 0 0;
    box-sizing: border-box;

    transition: all ease;
    transition-duration: ${props => `${props.duration}s`};
    animation: progress 1 linear both;
    animation-duration: ${props => `${props.duration}s`};

    @keyframes progress {
        from {width: 100%;}
        to {width: 2%;}
    }
`

export {
    QuestionBoard,
    Timer
}