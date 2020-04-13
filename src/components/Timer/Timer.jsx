import React, { Component } from "react"

import { Timer as Container } from "./Timer.styled"

export default class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            maxTime: this.props.maxTime,
            remainingTime: this.props.remainingTime
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            maxTime: nextProps.maxTime,
            remainingTime: nextProps.remainingTime
        })
    }

    componentWillUnmount() {

    }

    render() {
        let { maxTime, remainingTime } = this.state

        return (
            <Container duration={maxTime}>{remainingTime}</Container>
        )
    }
}