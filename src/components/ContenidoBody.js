import React from 'react'
import styled from 'styled-components';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Inicio } from './Inicio';
import { Roles } from './Roles';
import { Uniformes } from './Uniformes';

export const ContenidoBody = () => {
  return (
    <BrowserRouter>
        <Contenedor>
            <Titulo><h2>Hospital Base de Valdivia</h2></Titulo>
            <ContenedorNavegacion>
                <Menu>
                    <NavLink to='/'>Inicio</NavLink>
                    <NavLink to='/roles'>Roles GGSS</NavLink>
                    <NavLink to='/uniformes'>Uniformes</NavLink>
                </Menu>
            </ContenedorNavegacion>
            <Main>
                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/uniformes' element={<Uniformes/>} />
                    <Route path='/roles' element={<Roles/>} />
                </Routes>
            </Main>
            

        </Contenedor>
    </BrowserRouter>
    
  )
}

const Contenedor = styled.div`
    height: 80%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

const Titulo = styled.div`
    width: 100%;
    height: Auto;
    text-align: center;
    color: #012056;
`
const ContenedorNavegacion = styled.div`
   text-align: center;
   margin-bottom: 40px;
`
const Main = styled.div`
    width: 90%;
    height: 100%;
    background: #012056;
    padding: 20px;
    border-radius: 10px;
    box-shadow: opx 0px 5px rgba(129, 129, 129, 0.1);
    margin: 5px;
    color: white
`
const Menu = styled.nav`
color:#012056;
    a{
        text-decoration: none;
        color: #165168;
        margin: 0 10px;
    }
    a:hover{
        color: #001d80;
    }
    a.active{
        border-bottom: 2px solid #001d80;
    }
`
