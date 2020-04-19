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
        width: 200px;
        box-sizing: border-box;

        @media (min-width: 320px) and (max-width: 480px) {
            width: 150px;
        }
    }

    * {
        font-size: 24px;

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 12px;
        }
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