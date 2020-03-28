import styled from "styled-components"
import { Button } from "../../Common.styled"

const Container = styled.div`
    display: flex;
    flex-direction: column;


    margin: 0;
    padding: 0;
`

const SettingsForm = styled.div`
    display: flex;
    flex-direction: column;
`

const SettingsFormRow = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0;
    justify-content: ${props => props.childAlignment || "space-between"};
`

let FormLabel = styled.label`
    font-size: 24px;
    color: #fff;
`

let FormInput = styled.input`
    font-size: 24px;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 10px 10px;
    outline: 0;
`

export {
    Button,
    Container,
    FormLabel,
    FormInput,
    SettingsForm,
    SettingsFormRow
}