import React from 'react'
import httpClient from '../http/httpClient'

class LogIn extends React.Component {
	
	state = {
		fields: { email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Inicio de Sesión</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Correo" name="email" value={email} />
							<input type="password" placeholder="Contraseña" name="password" value={password} />
							<button className="button button-outline">Iniciar Sesión</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default LogIn;
