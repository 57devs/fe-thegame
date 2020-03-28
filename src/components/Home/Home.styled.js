import styled from "styled-components"

const Container = styled.div`
    display: flex;

    flex-direction: column;
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    min-width: 250px;

    padding: 10px 40px;
    margin: 10px;
    border: 0;
    border-radius: 5px;

    font-size: 48px;
    background-color: ${props => props.backgroundColor || "#fff"};
    color: #fff;
    outline: 0;
`

export {
    Button,
    Container
}