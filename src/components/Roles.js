import React from 'react'
import styled from 'styled-components'

export const Roles = () => {
  return (
    <Rol>
        <h3>Roles de guardia</h3>
        <GroupCard1>
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
                <li>Berta Contreras</li>
              </ul>
            </div>
            <div>
              <ul>
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
          <Tarjeta class="mdc-card">
            <div class="mdc-card__header">
              <J1>Jefe de turno : Wilma Muñoz - 7x7x12 noche</J1>
            </div>
            <Cuerpo class="mdc-card__Body">
              <div>
              <p></p>
                <ul>
                  <li>Jorge Jaramillo</li>
                  <li>Ignacio Herrera</li>
                  <li>Fernando Cofre</li>
                  <li>Escarleth Pineda</li>
                  <li>Carlos Espinoza</li>
                  <li>Yerko Carrasco</li>
                  <li>Jorge Cortez</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>--FALTANTE--</li>
                  <li>--FALTANTE--</li>
                </ul>
              </div>
            </Cuerpo>
          </Tarjeta>
          <Tarjeta class="mdc-card">
          <div class="mdc-card__header">
            <J1>Jefe de turno : Francisco Mella - 7x7x12 dia</J1>
          </div>
          <Cuerpo class="mdc-card__Body">
            <div>
            <p></p>
              <ul>
                <li>Camila Riquelme</li>
                <li>Heriberto Perez</li>
                <li>Judith Marquez</li>
                <li>Carolina Gonzalez</li>
                <li>Mauricio Flores</li>
                <li>Miriam Muñoz</li>
                <li>Monica Hainricksen</li>
                <li>Bastian Andrades</li>
                <li>Maria Velasquez</li>
              </ul>
            </div>
            <div>
              <ul>

                <li>Sebastian Lovera</li>
                <li>Jerson Mora</li>
                <li>Patricio Vega</li>
                <li>Luz Huerta</li>
                <li>FALTANTE</li>
                <li>FALTANTE</li>
                <li>FALTANTE</li>
              </ul>
            </div>
          </Cuerpo>
          </Tarjeta>
          <Tarjeta class="mdc-card">
            <div class="mdc-card__header">
              <J1>Jefe de turno : Rodrigo Cancino - 7x7x12 Noche</J1>
            </div>
            <Cuerpo class="mdc-card__Body">
              <div>
              <p></p>
                <ul>
                  <li>Cristofer Martinez</li>
                  <li>Sebastian Uribe</li>
                  <li>Nicolas Gallardo</li>
                  <li>Angela Almendras</li>
                  <li>Leonor Muñoz</li>
                  <li>--FALTANTE--</li>
                  <li>--FALTANTE--</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>--FALTANTE--</li>
                  <li>--FALTANTE--</li>
                </ul>
              </div>
            </Cuerpo>
          </Tarjeta>
        </GroupCard1>
        <GroupCard2>
          <Tarjeta2 class="mdc-card">
          <div class="mdc-card__header">
            <J1>Jefe de turno : Turno de dia - 5x2x10 dia</J1>
          </div>
          <Cuerpo class="mdc-card__Body">
            <div>
              <ul>
                <li>Carol Huerta</li>
                <li>Rodrigo Aveldaño</li>
                <li>Ana Gonzalez</li>
                <li>--FALTANTE--</li>
              </ul>
            </div>
          </Cuerpo>
          </Tarjeta2>
        </GroupCard2>
    </Rol>
  )
}

const Rol = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`
const Tarjeta = styled.div`
background: #f2f2f2;
height: 26vh;
width: 16vw;
border-radius: 10px;
color: #001d80;
text-align: start;
overflow-y: scroll;
margin: 5px;
padding: 6px

`
const Tarjeta2 = styled.div`
background: #f2f2f2;
height: 20vh;
width: 15vw;
border-radius: 10px;
color: #001d80;
text-align: start;
overflow-y: scroll;
margin: 5px;
padding: 5px

`
const J1 = styled.h3`
text-align: center;
`
const Cuerpo = styled.div`
display: flex;
`
const GroupCard1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const GroupCard2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`