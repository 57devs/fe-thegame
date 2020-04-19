import React, { Component } from "react"
import { request } from "../../request"

import { Container, List, ListItem } from "./Scoreboard.styled"

export default class Scoreboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameResult: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            request("GET", `games/${this.props.match.params.id}/scoreboard`, null, gameResult => {
                this.setState({ gameResult })
            })
        }, 2000);
    }

    render() {
        let { gameResult } = this.state
        if (!gameResult) return <div>Sonuclar hesaplaniyor...</div>

        let { game_name, created_by, player_scores } = gameResult
        return (
            <Container>
                <h3>{game_name} sonucu</h3>
                <span>oyun kurucusu {created_by}</span>
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