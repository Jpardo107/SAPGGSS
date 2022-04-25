import styled from "styled-components";

const Contenedor = styled.div`
    height: 98vh;
    width: 99vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Header = styled.div`
    width: 100%;
    height: 10%;
    color: #012056;

`;
const Body = styled.div`
    width:100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const Footer = styled.div`
    background: #daf7a6;
    width: 100%;
    height: 5%;
`;
export {Contenedor, Header, Body, Footer}
