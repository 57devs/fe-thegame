import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { request } from "../../request"

import { Button, Container, Form, FormInput, FormLabel, FormRow } from "./Join.styled"

export default class Join extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameId: null,
            isGameIDValid: false,
            isUsernameValid: false,
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

        if (isUsernameValid) {
            return <Redirect to={`/game/${gameId}`} />
        } else return (
            <Container>
                <Form>
                    {
                        isGameIDValid ?
                            <React.Fragment>
                                <FormRow>
                                    <FormLabel>Takma ad:</FormLabel>
                                    <FormInput
                                        name="username"
                                        onChange={this.onInputChange}
                                        placeholder="Bilgiç"
                                        value={username || ""}
                                    />
                                </FormRow>
                                <FormRow>
                                    <Button onClick={this.submitUsername} style={joinButtonStyles}>Katıl</Button>
                                </FormRow>
                            </React.Fragment> :
                            <React.Fragment>
                                <FormRow>
                                    <FormLabel>Oyun ID'si:</FormLabel>
                                    <FormInput
                                        autocomplete="off"
                                        name="gameId"
                                        onChange={this.onInputChange}
                                        placeholder="#123456"
                                        value={gameId || ""}
                                    />
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
        request("POST", `join/${this.state.gameId}`, { username: this.state.username }, result => {
            localStorage.setItem("username", this.state.username)
            this.setState({
                isUsernameValid: true
            })
        })
    }
}