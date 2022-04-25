import React from 'react'
import styled from 'styled-components'

export const Uniformes = () => {
  return (
    <Vestimenta>
        <h3>Gestion de uniformes</h3>
        <Tabla>
          <tr>
            <Th>Zapatos</Th>
            <Th>Pantalon</Th>
            <Th>Camisa</Th>
            <Th>Corbata</Th>
            <Th>Polar</Th>
            <Th>Chaqueta</Th>
            <Th>Reflectante</Th>
            <Th>Jockey</Th>

          </tr>
          <tr>
            <Td>38-39-40-41-42-43-44</Td>
            <Td>38-40-42-44-50-56-58</Td>
            <Td>s-m-l-xl-xxl</Td>
            <Td>Sin talla</Td>
            <Td>s-m-l-xl-xxl</Td>
            <Td>s-m-l-xl-xxl</Td>
            <Td>s-m-l-xl-xxl</Td>
            <Td>Sin talla</Td>
          </tr>
          <tr>
            <Td>7</Td>
            <Td>7</Td>
            <Td>5</Td>
            <Td>10</Td>
            <Td>5</Td>
            <Td>5</Td>
            <Td>5</Td>
            <Td>10</Td>
          </tr>
        </Tabla>
    </Vestimenta>
  )
}

const Vestimenta = styled.div`
    text-align: center;
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Tabla = styled.table`
  width:100%;
  border:1px solid white;
  margin-bottom: 150px;
`


const Td = styled.td`
  border:1px solid white;
`
const Th = styled.td`
  border:1px solid white;
`


