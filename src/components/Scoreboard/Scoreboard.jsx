import React, { Component } from "react"
import { request } from "../../request"

import { Container, List, ListItem } from "./Scoreboard.styled"

export default class Scoreboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameResult: {}
        }
    }

    componentDidMount() {
        request("GET", `games/${this.props.match.params.id}/scoreboard`, null, gameResult => {
            this.setState({ gameResult })
        })
    }

    render() {
        let { created_by, game_name, player_scores } = this.state.gameResult

        return (
            <Container>
                <h3>Scoreboard of the game #{game_name}</h3>
                <span>created by {created_by}</span>
                <List>
                    {
                        player_scores ?
                            player_scores.map((score, i) => {
                                let username = Object.keys(score)[0]
                                let point = score[username]

                                return <ListItem key={i}>{i + 1}. {username} {point}</ListItem>
                            }) :
                            <React.Fragment />
                    }
                </List>
            </Container>
        )
    }
}