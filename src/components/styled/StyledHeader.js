import styled from 'styled-components'

export const StyledHeader = styled.div`
    margin: 0 auto;
    padding: 1%;
    padding-top: 2.5%;
    display: grid;
    grid-template-columns: 20% 65% 15%;
    width: 80%;
    position: relative;

    nav {
        width: 70%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    a {
        text-decoration: none;
        margin: 2px;
        color: #434343;
    }

    button {
        font-family: "Red Rose", "sans-serif";
        background:linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
        border-radius: 10px;
        border: none;
        outline: none;
        padding: 1% 2%;
        color: #fff;
        position: absolute;
        bottom: 9%;
        right: 1%;
    }

`