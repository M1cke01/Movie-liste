import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps { 
    appName: string;
}

const Header = ({ appName }: HeaderProps) => {
    
    return (
        <header>
            <h1>{appName}</h1>
            <nav>
                <Link to="/movies">Listado de pelis</Link> | <Link to="/">Inicio</Link>
            </nav>
       </header>
    )
}

export default Header;