import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;

color: #fff;

h3 {
    margin: 0 auto;
    padding: 0;
}

span {
    font-size: 11px;
    margin: 5px 0 10px auto;
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

&:nth-of-type(2) {
    color: yellow;
}

&:nth-of-type(3) {
    color: tomato;
}

&:last-of-type {
    color: red;
}
`

const Loading = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Spinner = styled.div`
    border: 8px solid #ababab;
    border-radius: 50%;
    border-top: 8px solid #fff;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export {
    Container,
    List,
    ListItem,
    Loading,
    Spinner
}