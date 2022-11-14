import styled from "styled-components";

export const StyledFooter = styled.div`
    height: 300px;
    padding:50px 0  0;
    color: #F1F3F9;
    background: #1D1D1E;
    display: grid;
    grid-template-columns: 38% 19% 19% 24%;

    h3 {
        margin-bottom: 7%;
        color: #FFFFFF;
    }

    p {
        margin-block: 1%;
        font-size: 14px;
        line-height: 35px;
    }

    .footer-div-one {
        margin-left: 16%;
        height: 90%;
        flex-direction: column;
    }

    .social-div {
        margin-top: 18%;
        margin-left: 1.5%;
        width: 20%;
        display: flex;
        justify-content: space-between;
    }

    .certified {
        margin-top: 20%;
        margin-left: 1.5%;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            margin-left: 2%;
        }
    }
`