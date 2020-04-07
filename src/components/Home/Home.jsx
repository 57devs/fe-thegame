import React, { Component } from "react"
import { Link } from "react-router-dom"

import { Button, Container } from "./Home.styled"

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Link to="/create">
                    <Button backgroundColor="purple">Yeni Oyun</Button>
                </Link>
                <Link to="/join">
                    <Button backgroundColor="tomato">Katıl</Button>
                </Link>
            </Container>
        )
    }
}