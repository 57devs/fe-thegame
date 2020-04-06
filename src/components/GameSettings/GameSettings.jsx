import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import Select from "react-select"

import { Button, Container, DropdownWrapper, FormInput as Input, FormLabel as Label, SettingsForm as Form, SettingsFormRow as FormRow } from "./GameSettings.styled"

const difficultyOptions = [
    { value: "1", label: "Çocuk Oyuncağı" },
    { value: "2", label: "Kolay" },
    { value: "3", label: "Orta" },
    { value: "4", label: "Zor" },
    { value: "5", label: "Boru" }
]

const customStyles = {
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 200,
    })
}


export default class GameSettings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            title: null,
            questionLength: null,
            successful: false,
            difficulty: null
        }
    }

    render() {
        let { successful, difficulty } = this.state

        if (successful) return <Redirect to="/game" />
        return (
            <Container>
                <Form>
                    <FormRow>
                        <Label>Takma ad:</Label>
                        <Input name="username" onChange={this.setSettingValues} placeholder="oyuncu" />
                    </FormRow>
                    <FormRow>
                        <Label>Oyun Adı:</Label>
                        <Input autocomplete="off" name="title" onChange={this.setSettingValues} placeholder="oyunum" />
                    </FormRow>
                    <FormRow>
                        <Label>Soru Sayısı:</Label>
                        <Input autocomplete="off" name="questionLength" onChange={this.setSettingValues} type="number" placeholder="10" />
                    </FormRow>
                    <FormRow>
                        <Label>Zorluk:</Label>
                        <DropdownWrapper>
                            <Select
                                onChange={this.changeDifficulty}
                                options={difficultyOptions}
                                placeholder="Zorluk seç"
                            />
                        </DropdownWrapper>
                    </FormRow>
                    <FormRow childAlignment="flex-end">
                        <Button
                            onClick={this.onSubmit}
                            backgroundColor="tomato"
                            fontSize="24px"
                            width="200px"
                        >Onayla</Button>
                    </FormRow>
                </Form>
            </Container>
        )
    }

    onSubmit = () => {
        let { difficulty, username, title, questionLength } = this.state

        if (!username) {
            alert("Kullanıcı adı boş bırakılamaz.")
            return
        }

        if (!title) {
            alert("Oyun adı boş bırakılamaz.")
            return
        }

        if (!questionLength) {
            alert("Soru sayısı boş bırakılamaz.")
            return
        }

        if (!difficulty) {
            alert("Zorluk derecesi boş bırakılamaz.")
            return
        }

        this.setState({
            successful: true
        })
    }

    setSettingValues = (e) => {
        let stateKey = e.target.attributes.name.value
        let value = e.target.value

        this.setState({
            [stateKey]: value
        })
    }

    changeDifficulty = (difficulty) => {
        this.setState(
            { difficulty }
        )
    }
}