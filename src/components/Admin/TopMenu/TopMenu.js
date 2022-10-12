import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from '../../../hooks'
import './TopMenu.scss'

export function TopMenu() {
    const { auth, logout } = useAuth()

    const renderName = () => {
        if (auth.me?.first_name && auth.me?.last_name) {
            return `${auth.me.first_name} ${auth.me.last_name}`
        }
        return auth.me?.email
    }

    return (
        <Navbar bg="light" variant="light" className="top-menu-admin">
        <Navbar.Toggle />
            <Container>
                <Navbar.Collapse className="justify-content-end">
                <div className="top-menu-logo">img</div>
                <div className="top-menu-name">Hola, {renderName()}</div>
                <Nav.Item>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  onClick={logout} className="cerrar-sesion">
                        Logout
                    </Nav.Link>
                </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
