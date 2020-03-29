import styled from "styled-components"
import { Button, Form, FormInput, FormLabel, FormRow } from "../../Common.styled"

const Container = styled.div`
    display: flex;
    flex-direction: column;


    margin: 0;
    padding: 0;
`

export {
    Button,
    Container,
    FormLabel,
    FormInput,
    Form as SettingsForm,
    FormRow as SettingsFormRow
}