import React from 'react'
import imageVIP from '../assets/img/vip.jpg'

const VIP = (props) => {
	return (
		<div className='VIP'>
			<h1>Zona VIP!</h1>
			<h2>Soy la pagina de entrada a la zona restringida!</h2>
			<img src={imageVIP} alt="VIP" />
		</div>
	)
}

export default VIP