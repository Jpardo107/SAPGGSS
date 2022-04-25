import React from 'react'
import styled from 'styled-components'

export const Inicio = () => {
  return (
    <Principal>
        <h3>Sistema de gestion Para supervision</h3>
        <p>El presente sistema esta elaborado para la gestion de los turnos de guardia
          y un inventario para el uniforme que se mantiene para la entrega
        </p>
    </Principal>
  )
}

const Principal = styled.div`
    height: 80%;
    width: 100%;
    text-align: center;
`