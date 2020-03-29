import React, { Component } from "react"
import { Redirect } from "react-router-dom"

import { Button, Container, Form, FormInput, FormLabel, FormRow } from "./Join.styled"

export default class Join extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isGameIDValid: false,
            isUsernameValid: false,
            gameID: null,
            username: null
        }
    }

    render() {
        let { gameID, isGameIDValid, isUsernameValid, username } = this.state

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

        if (isUsernameValid) return <Redirect to="/game" />
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
                                    <FormInput autocomplete="off" name="gameID" onChange={this.onInputChange} value={gameID || ""} placeholder="#123456" />
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
        this.setState({
            isUsernameValid: true
        })
    }
}