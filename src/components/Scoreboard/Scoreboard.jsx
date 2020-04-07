import React, { Component } from "react"

import { Container, List, ListItem } from "./Scoreboard.styled"

export default class Scoreboard extends Component {
    render() {
        return (
            <Container>
                <h3>Scoreboard</h3>
                <List>
                    <ListItem>#1 M. Jordan 300 Points</ListItem>
                    <ListItem>#2 L. James 299 Points</ListItem>
                    <ListItem>#3 K. Bryant 299 Points</ListItem>
                    <ListItem>#4 K. Durant 250 Points</ListItem>
                    <ListItem>#5 J. McGee 15 Points</ListItem>
                </List>
            </Container>
        )
    }
}