import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faTable, faClockRotateLeft, faFolder, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons"
import './SideMenu.scss'

export function SideMenu(props) {
    const { children } = props
    const { pathname } = useLocation()

    return (
        <div className='side-menu-admin'>
            <MenuLeft pathname={pathname}/>
            <div className='content'>{ children }</div>
        </div>
    )
}

function MenuLeft(props) {
    const { pathname } = props

    return (
        <Nav className="sidebar col-md-12 d-none d-md-block bg-dark">
            <Nav.Item>
                <Nav.Link
                className="text-nav"
                as={Link}
                to={"/admin"}
                active={pathname === "/admin"}
                >
                <FontAwesomeIcon icon={faHouse} className="icon" /> Pedidos
                </Nav.Link>
            </Nav.Item>
            <Nav.Link
                className="text-nav"
                as={Link}
                to={"/admin/tables"}
                active={pathname === "/admin/tables"}
            >
                <FontAwesomeIcon icon={faTable} className="icon" /> Mesas
            </Nav.Link>
            <Nav.Link
                className="text-nav"
                as={Link}
                to={"/admin/payments-history"}
                active={pathname === "/admin/payments-history"}
            >
            <FontAwesomeIcon icon={faClockRotateLeft} className="icon" /> Historia de pagos
            </Nav.Link>
            <Nav.Link
                className="text-nav"
                as={Link}
                to={"/admin/categories"}
                active={pathname === "/admin/categories"}
            >
                <FontAwesomeIcon icon={faFolder} className="icon" /> Categories
            </Nav.Link>
            <Nav.Link
                className="text-nav"
                as={Link}
                to={"/admin/products"}
                active={pathname === "/admin/products"}
            >
                <FontAwesomeIcon icon={faCartShopping} className="icon" /> Productos
            </Nav.Link>
            <Nav.Link
                className="text-nav"
                as={Link}
                to={"/admin/users"}
                active={pathname === "/admin/users"}
            >
                <FontAwesomeIcon icon={faUser} className="icon" /> Usuarios
            </Nav.Link>
        </Nav>
    )
}