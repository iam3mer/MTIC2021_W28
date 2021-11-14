import React from 'react';

class Formulario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valorInput: '',
      valorTextarea: '',
      valorSelect: 'gato',
      valorSelectMultiple: [],
      auxVSMultiple: 'pereira'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(`El input contiene: ${this.state.valorInput}`);
    console.log(`El textarea contiene: ${this.state.valorTextarea}`);
    console.log(`El select contiene: ${this.state.valorSelect}`);
    console.log(`El select multiple contiene: ${this.state.valorSelectMultiple}`);
    e.preventDefault();
  }

  handleChange(e) {
    if (e.target.name === 'input') {
      this.setState({
        valorInput: e.target.value
      });
    };
    if (e.target.name === 'textarea') {
      this.setState({
        valorTextarea: e.target.value
      })
    }
    if (e.target.name === 'select') {
      this.setState({
        valorSelect: e.target.value
      })
    }
    if (e.target.name === 'selectMultiple') {
      this.setState(state => {
        state.auxVSMultiple = e.target.value;
        const valorSelectMultiple = state.valorSelectMultiple.concat(this.state.auxVSMultiple);
        return {
          valorSelectMultiple,
          auxVSMultiple: ''
        }
      })
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Input </label>
          <input type="text" name="input" value={this.state.valorInput} onChange={this.handleChange}></input>
          <br/>
          <textarea name="textarea" value={this.state.valorTextarea} onChange={this.handleChange}></textarea>
          <br/>
          <select name="select" value={this.state.valorSelect} onChange={this.handleChange}>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="tortuga">Tortuga</option>
          </select>
          <br/>
          <select name="selectMultiple" value={this.state.valorSelectMultiple} multiple={true} onChange={this.handleChange}>
            <option value="pereira">Pereira</option>
            <option value="manizales">Manizales</option>
            <option value="armenia">Armenia</option>
          </select>
          <br/>
          <button type="submit">Enviar</button>
        </form>
      </>
    )
  }
}

export default Formulario;
