import styled from "styled-components"
import { Button, Form, FormInput, FormLabel, FormRow } from "../../Common.styled"

const Container = styled.div`
    display: flex;
    flex-direction: column;


    margin: 0;
    padding: 0;
`

const DropdownWrapper = styled.div`
    display: flex;

    & > div {
        width: 275px;
    }

    * {
        font-size: 24px;
    }
`

export {
    Button,
    Container,
    DropdownWrapper,
    FormLabel,
    FormInput,
    Form as SettingsForm,
    FormRow as SettingsFormRow
}