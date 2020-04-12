import React, { Component } from "react"
import { Link } from "react-router-dom"
import { request } from "../../request"

import { Button, Buttons, Container, Title, User, Users } from "./Lobby.styled"

export default class Lobby extends Component {
    render() {
        let { players, gameName, createdBy, username } = this.props.gameInfo
        let isOwner = createdBy === username ? true : false

        return (
            <Container>
                <Title>Oyun adı: {gameName}</Title>
                <Users>
                    <h2>Oyuncular: </h2>
                    {
                        players && players.length > 0 ?
                            players.map((player, i) => <User key={i}>{`${i + 1}. ${player}`}</User>) :
                            <React.Fragment />
                    }
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
                                onClick={this.startGame}
                            >Başlat</Button> :
                            <React.Fragment />
                    }
                </Buttons>
            </Container>
        )
    }

    startGame = e => {
        // endpoint /start-game/<game_id> GET
        // request("GET", `start-game/${this.props.gameInfo.gameId}`, null, response => {
        //     console.log(response)
        //     // this.props.startGame(true)
        // })

        this.props.startGame()
    }
}