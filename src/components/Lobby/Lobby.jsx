import React, { Component } from "react"
import { Link } from "react-router-dom"

import { Button, Buttons, Container, Title, User, Users } from "./Lobby.styled"

export default class Lobby extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Falancanin oyunu",
            isOwner: true
        }
    }

    render() {
        let { isOwner, title } = this.state

        return (
            <Container>
                <Title>Oyun adı: {title}</Title>
                <Users>
                    <h2>Oyuncular: </h2>
                    <User>Ahmet</User>
                    <User>Mehmet</User>
                    <User>Ali</User>
                    <User>Veli</User>
                    <User>Ayşe</User>
                    <User>Fatma</User>
                </Users>
                <Buttons>
                    <Link to="/">
                        <Button
                            width="200px"
                            fontSize="24px"
                            backgroundColor="red"
                        >Ayrıl</Button>
                    </Link>
                    {
                        isOwner ?
                            <Button
                                width="200px"
                                fontSize="24px"
                                backgroundColor="#0a0"
                            >Başlat</Button> :
                            <React.Fragment />
                    }
                </Buttons>
            </Container>
        )
    }
}