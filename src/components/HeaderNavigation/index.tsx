import React, { useContext, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import { AuthContext } from 'contexts/Auth/AuthContext';
import { handleLogout } from 'services/authService';
import SearchIcon from './SearchIcon';
import NotificationIcon from './NotificationIcon';
import UserIcon from './UserIcon';

const Header = ({ ...props }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const getActiveClassName = (url: string) => {
        if (`${window.location.pathname}${window.location.hash}` === url) {
            return "active"
        } else {
            return ''
        }
    }

    const { user } = useContext(AuthContext);
    return (
        <Navbar id='header' color='white' expand="md" className='pt-3 px-0'>
                <div className='mr-4'>
                    <h4 className='font-weoght-bolder'>Welcome Back</h4>
                </div>
                <div className='nav-search'>
                   <SearchIcon /> <input placeholder='Search...' type="search" name="" id="" />
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mt-md-0 mt-3 align-items-center" navbar>
                      <div className='mr-4'> <NotificationIcon /></div>
                      <div><UserIcon /></div>
                    </Nav>
                </Collapse>
        </Navbar>
    );
}

export default Header;