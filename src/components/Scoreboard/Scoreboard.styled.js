import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;

    color: #fff;

    h3 {
        margin: 0 auto;
        padding: 0;
    }
`

const List = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;
`

const ListItem = styled.div`
    display: flex;
    align-items: center;

    padding: 5px;

    &:first-of-type {
        color: #0a0;
    }

    &:nth-of-type(2),
    &:nth-of-type(3) {
        color: tomato;
    }

    &:last-of-type {
        color: red;
    }
`

export {
    Container,
    List,
    ListItem
}