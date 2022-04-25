import React from 'react'
import styled from 'styled-components'
import logo from './../imagenes/logo.png'

export const ContenidoHeader = () => {
  return (
      <Contenedor>
        <Imagen src={logo} alt='LogoV&V' />
        <Titulo><h1>V&V Security</h1></Titulo>
        <SSSS>
            <p>SS.SS. Hernan Fuentes</p>
            <p>SS.SS Jaime Pardo</p>
        </SSSS>
      </Contenedor>
  )
}

const Contenedor = styled.div`
    width: 100%;
    height: 100%;
	display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
const Imagen = styled.img`
    height:100%;
    width:90%;
    text-align: center;

`

const Titulo = styled.div`
    height:100%;
    width:100%;
    text-align: center;

`
const SSSS = styled.div`
    height: 100%;
    width:100%;
    color:#012056;
    text-align: center;
`