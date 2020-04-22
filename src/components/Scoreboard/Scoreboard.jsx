import React, { Component } from "react"
import { request } from "../../request"

import { Container, List, ListItem, Loading, Spinner } from "./Scoreboard.styled"

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
                let scores = gameResult.player_scores
                let formattedScores = []
                for (let i = 0; i < scores.length; i++) {
                    let scoreItem = scores[i]
                    let username = Object.keys(scoreItem)[0]
                    let score = scoreItem[username]

                    formattedScores.push({
                        username: username,
                        score: score
                    })
                }

                formattedScores = formattedScores.sort((a, b) => a.score > b.score ? -1 : 1)
                gameResult.player_scores = formattedScores

                this.setState({ gameResult })
            })
        }, 2000)
    }

    render() {
        let { gameResult } = this.state
        if (!gameResult) return <Loading><Spinner /></Loading>

        let { game_name, created_by, player_scores } = gameResult
        return (
            <Container>
                <h3>Oyun Adı: {game_name}</h3>
                <span>Oyun Kurucusu: {created_by}</span>
                <List>
                    {
                        player_scores ?
                            player_scores.map((score, i) => {
                                return <ListItem key={i}>{i + 1}. {score.username} {Math.round(score.score)} puan</ListItem>
                            }) :
                            <React.Fragment />
                    }
                </List>
            </Container>
        )
    }
}