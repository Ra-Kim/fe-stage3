import styled from "styled-components";

export const StyledLanding = styled.div`
    width: 78%;
    margin: auto;
    padding-block: 2%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 8%;

    h1 {
        font-weight: 400;
        font-size: 42px;
        line-height: 130%;
        letter-spacing: -0.02em;
        color: #434343;

        span {
            color: #A02279;
            font-weight: 600;
        }
    }

    .landing-info {
        height: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        p {
            font-size: 19px;
            line-height: 35px;
            color: #434343;
        }
    }

    .input {
        position: relative;
        margin-top: 4%;
        display: flex;
        box-shadow: -1px 7px 7px -8px rgba(0,0,0,0.75);
    }

    input {
        width: 100%;
        height: 33px;
        padding: 1%;
        opacity: 0.6;
        border: 1px solid #434343;
        border-radius: 4px;
        font-family: 'Red Rose' , 'sans-serif';
    }

    button {
        position: absolute;
        right: 0;
        width: 38%;
        height: 45px;
        border: none;
        outline: none;
        margin-left: 0;
        cursor: pointer;
        background: #A02279;
        color: #fff;
        border-radius: 0 5px 5px 0;
        font-family: 'Red Rose' , 'sans-serif';
    }
`

export const StyledPlacesSection = styled.div`
    width: 84%;
    margin: 2.2% auto;
    text-align: center;

    section {
        margin-top: 3%;
        display: flex;
        flex-wrap: wrap;
    }
`

export const StyledNFTSection = styled.div`
    height: 500px;
    background: #A02279;
    padding: 20px 100px;
    display: grid;
    grid-template-columns: 38% 62%;

    div {
        height: 80%;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h1 {
        font-size: 48px;
        color: #FFFFFF;
    }

    p {
        font-size: 18px;
        line-height: 35px;
        color: #FFFFFF;
    }

    button {
        font-family: 'Red Rose' , 'sans-serif';
        width: 34%;
        background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
        border-radius: 8px;
        padding: 3% 0;
        border: none;
        outline: none;
        color: #A02279;
    }

    .img-div {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 70%;
    }
`