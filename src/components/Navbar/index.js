import React from 'react'
import { Nav, NavIcon, NavLink , Bars} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>حراج</NavLink>
                <NavIcon onClick={toggle}>
                    <p>منو</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
