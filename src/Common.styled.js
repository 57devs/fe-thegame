import styled from "styled-components"

const Button = styled.button`
    min-width: ${props => props.width || "300px"};

    padding: 10px 40px;
    margin: 10px 0;
    border: 0;
    border-radius: 5px;

    font-size: ${props => props.fontSize || "48px"};
    background-color: ${props => props.backgroundColor || "#fff"};
    color: #fff;
    outline: 0;

    @media (min-width: 320px) and (max-width: 480px) {
        min-width: ${props => props.mobileWidth || "150px"}
        padding: 5px 20px;
        margin: 5px 0;
        border-radius: 2.5px;

        font-size: ${props => props.mobileFontSize || "24px"};
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
`

const FormRow = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0;
    justify-content: ${props => props.childAlignment || "space-between"};
`

const FormLabel = styled.label`
    font-size: 24px;
    color: #fff;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }    
`

const FormInput = styled.input`
    font-size: 24px;
    border-radius: 5px;
    border: 1px solid transparent;
    box-sizing: border-box;
    padding: 10px;
    outline: 0;
    width: ${props => props.width || "200px"};

    @media (min-width: 320px) and (max-width: 480px) {
        width: ${props => props.mobileWidth || "150px"};
        font-size: 12px;
        border-radius: 2.5px;
        padding: 5px
    }
`

export {
    Button,
    Form,
    FormInput,
    FormLabel,
    FormRow
}