import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { request } from "../../request"

import { Button, Container, Form, FormInput, FormLabel, FormRow } from "./Join.styled"

export default class Join extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isGameIDValid: false,
            isUsernameValid: false,
            gameId: null,
            username: null
        }
    }

    render() {
        let { gameId, isGameIDValid, isUsernameValid, username } = this.state

        let nextButtonStyles = {
            width: "100%",
            fontSize: "24px",
            backgroundColor: "#007bff",
        }

        let joinButtonStyles = {
            width: "100%",
            fontSize: "24px",
            backgroundColor: "#28a745",
        }

        if (isUsernameValid) return <Redirect to={`/game/${gameId}`} />
        return (
            <Container>
                <Form>
                    {
                        isGameIDValid ?
                            <React.Fragment>
                                <FormRow>
                                    <FormLabel>Takma ad:</FormLabel>
                                    <FormInput name="username" onChange={this.onInputChange} value={username || ""} placeholder="Bilgiç" />
                                </FormRow>
                                <FormRow>
                                    <Button onClick={this.submitUsername} style={joinButtonStyles}>Katıl</Button>
                                </FormRow>
                            </React.Fragment> :
                            <React.Fragment>
                                <FormRow>
                                    <FormLabel>Oyun ID'si:</FormLabel>
                                    <FormInput autocomplete="off" name="gameId" onChange={this.onInputChange} value={gameId || ""} placeholder="#123456" />
                                </FormRow>
                                <FormRow>
                                    <Button onClick={this.submitGameID} style={nextButtonStyles}>Ileri</Button>
                                </FormRow>
                            </React.Fragment>
                    }
                </Form>
            </Container>
        )
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.attributes.name.value]: e.target.value
        })
    }

    submitGameID = () => {
        this.setState({
            isGameIDValid: true
        })
    }

    submitUsername = () => {
        // POST /join-game/<game_id>
        request("POST", `join-game/${this.state.gameId}`, { username: this.state.username }, result => {
            console.log(result)
        })
        // this.setState({
        //     isUsernameValid: true
        // })
    }
}