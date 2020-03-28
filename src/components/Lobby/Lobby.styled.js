import styled from "styled-components"
import { Button } from "../../Common.styled"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
`
const Title = styled.h2`
    margin: 0;
    padding: 0;
`

const Users = styled.div`
    display: flex;
    flex-direction: column;
`

const User = styled.div`
    display: flex;
`
const Buttons = styled.div`
    display: flex;
    align-items: center;

    button {
        &:first-of-type {
            margin-right: 10px;
        }
    }
`

export {
    Button,
    Buttons,
    Container,
    Title,
    User,
    Users
}