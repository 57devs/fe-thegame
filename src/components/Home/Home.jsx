import React, { Component } from "react"

import { Button, Container } from "./Home.styled"

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Button backgroundColor="purple">Create</Button>
                <Button backgroundColor="tomato">Join</Button>
            </Container>
        )
    }
}