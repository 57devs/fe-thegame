import styled from "styled-components"

const Button = styled.button`
    min-width: ${props => props.width || "300px"};

    padding: 10px 40px;
    margin: 10px 0;
    border: 0;
    border-radius: 5px;

    font-size: ${props => props.fontSize || "48px"};;
    background-color: ${props => props.backgroundColor || "#fff"};
    color: #fff;
    outline: 0;
`

export {
    Button
}