import React from 'react'
import styled from 'styled-components'

export const Roles = () => {
  return (
    <Rol>
        <h3>Roles de guardia</h3>
        <Tarjeta class="mdc-card">
          <div class="mdc-card__header">
            <J1>Jefe de turno : Olga Lueberth - 7x7x12 dia</J1>
          </div>
          <Cuerpo class="mdc-card__Body">
            <div>
            <p></p>
              <ul>
                <li>Erwin Angulo</li>
                <li>Ingrid Mayorga</li>
                <li>Manuel Farias</li>
                <li>Maria Cardenas</li>
                <li>Maria Toro</li>
                <li>Luz Escalona</li>
                <li>Hector San Martin</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Berta Contreras</li>
                <li>Johana Hernandez</li>
                <li>Luis Gajardo</li>
                <li>Jason Villablanca</li>
                <li>Pamela Cifuentes</li>
                <li>FALTANTE</li>
                <li>FALTANTE</li>
                <li>FALTANTE</li>
              </ul>
            </div>
          </Cuerpo>
        </Tarjeta>
    </Rol>
  )
}

const Rol = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`
const Tarjeta = styled.div`
background: #f2f2f2;
height: 90%;
width: 50%;
border-radius: 10px;
color: #001d80;
text-align: start;
overflow-y: scroll;
`
const J1 = styled.h3`
text-align: center;
`
const Cuerpo = styled.div`
display: flex;
`