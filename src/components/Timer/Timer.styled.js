import styled from "styled-components"

const Timer = styled.span`
    display: flex;
    justify-content: flex-end;

    color: #fff;
    background-color: ${props => props.backgroundColor || "green"};
    width: ${props => props.width || "100%"};
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

    @media (min-width: 320px) and (max-width: 480px) {
        border-radius: 2.5px;
        margin: 0 0 5px 0;
        padding: 0 2.5px 0 0;
        font-size: 12px;
    }
`

export {
    Timer
}