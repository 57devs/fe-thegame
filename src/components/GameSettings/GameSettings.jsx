import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import Select from "react-select"
import { request } from "../../request"

import {
    Button,
    Container,
    DropdownWrapper,
    FormInput as Input,
    FormLabel as Label,
    SettingsForm as Form,
    SettingsFormRow as FormRow
} from "./GameSettings.styled"

const DIFFICULTY_OPTIONS = [
    { value: "1", label: "Kolay" },
    { value: "3", label: "Orta" },
    { value: "5", label: "Zor" },
]

const QUESTION_LENGTH = [
    { value: "1", label: "10" },
    { value: "2", label: "20" },
    { value: "3", label: "30" }
]

export default class GameSettings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            difficulty: DIFFICULTY_OPTIONS[0],
            gameId: null,
            questionLength: QUESTION_LENGTH[0],
            title: null,
            username: null
        }
    }

    render() {
        let { difficulty, gameId, questionLength } = this.state

        if (gameId) {
            return <Redirect to={`game/${gameId}`} />
        } else return (
            <Container>
                <Form>
                    <FormRow>
                        <Label>Takma ad:</Label>
                        <Input
                            name="username"
                            onChange={this.setSettingValues}
                            placeholder="oyuncu"
                        />
                    </FormRow>
                    <FormRow>
                        <Label>Oyun Adı:</Label>
                        <Input
                            autocomplete="off"
                            name="title"
                            onChange={this.setSettingValues}
                            placeholder="oyunum"
                        />
                    </FormRow>
                    <FormRow>
                        <Label>Soru Sayısı:</Label>
                        <DropdownWrapper>
                            <Select
                                onChange={this.setQuestionLength}
                                options={QUESTION_LENGTH}
                                placeholder="Soru sayısı"
                                value={questionLength}
                            />
                        </DropdownWrapper>
                    </FormRow>
                    <FormRow>
                        <Label>Zorluk:</Label>
                        <DropdownWrapper>
                            <Select
                                onChange={this.changeDifficulty}
                                options={DIFFICULTY_OPTIONS}
                                placeholder="Zorluk seç"
                                value={difficulty}
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
        let { difficulty, questionLength, title, username } = this.state

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

        let gameInfo = {
            "difficulty": difficulty.value,
            "game_name": title,
            "num_of_questions": questionLength.label,
            "username": username
        }

        request("POST", "create-game", gameInfo, gameData => {
            localStorage.setItem("username", username)

            this.setState({ gameId: gameData.game_id })
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

    setQuestionLength = (questionLength) => {
        console.log(questionLength)
        this.setState(
            { questionLength }
        )
    }
}