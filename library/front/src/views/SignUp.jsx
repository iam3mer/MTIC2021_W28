import React from 'react'
import httpClient from '../http/httpClient'

class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Registro de Usuario</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Nombre Completo" name="name" value={name} />
							<input type="text" placeholder="Correo" name="email" value={email} />
							<input type="password" placeholder="Contraseña" name="password" value={password} />
							<button className="button button-outline">Registrar</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp;
