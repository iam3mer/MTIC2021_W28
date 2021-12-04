import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<Link to="/">Inicio</Link>
			{props.currentUser
				? (
					<span>
						<Link to="/vip">Zona VIP</Link>
						<Link to="/logout">Cerrar Sesión</Link>
					</span>
				)
				: (
					<span>
						<Link to="/login">Iniciar Sesión</Link>
						<Link to="/signup">Registrarse</Link>
					</span>
				)
			}
		</div>
	)
}

export default NavBar;
