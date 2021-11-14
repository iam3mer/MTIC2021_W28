import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      titulo: "",
      tiempo: "",
      responsable: "",
      descripcion: "",
      mensaje: false,
      message: "",
      tareas: [],
    };
    this.sendTask = this.sendTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timeMessage = null;
    this.closeMessage = this.closeMessage.bind(this);
  }

  // Al montarse el componente se solicitan los registros de las tareas en la DB
  componentDidMount() {
    this.getTask();
  }

  // Envio de los datos de las tareas
  sendTask(e) {
    e.preventDefault();

    // Si el ID de la tarea existe, entonces se hace una actualización del registro
    if (this.state._id) {
      fetch(`/api/${this.state._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            _id: "",
            titulo: "",
            tiempo: "",
            responsable: "",
            descripcion: "",
            mensaje: true,
            message: "Tarea actualizada!",
          });
          this.timeMenssage = setInterval(this.closeMessage, 2000); // Muestra el mensane durante 2 segundos
          this.getTask(); // Se actualiza la tabla de tareas
        });
    }

    // Si el ID no existe, entonces se inserta en la DB una nueva tarea
    else {
      fetch("/api", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            _id: "",
            titulo: "",
            tiempo: "",
            responsable: "",
            descripcion: "",
            mensaje: true,
            message: "Tarea registrada!",
          });
          this.timeMenssage = setInterval(this.closeMessage, 2000);
          this.getTask();
        })
        .catch((err) => console.log(err));
    }
  }

  // Escucha los cambios sobre los input
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  // Reinicia configuración de mensajes
  closeMessage() {
    clearInterval(this.timeMessage);
    this.setState({ mensaje: false, message: "" });
  }

  // Obtiene todos los registros de las tareas en la DB
  getTask() {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tareas: data.tareas });
        // console.log("RFE: ",this.state.tareas);
      })
      .catch((err) => console.log(err));
  }

  // Actualiza los valores del formulario realizando una consulta a la DB con el id recibido
  editTask(id) {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          _id: data.tarea._id,
          titulo: data.tarea.titulo,
          tiempo: data.tarea.tiempo,
          responsable: data.tarea.responsable,
          descripcion: data.tarea.descripcion,
        });
      });
  }

  // Elimina la tarea cuyo ID coincide
  deleteTask(id) {
    fetch(`/api/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          mensaje: true,
          message: "Tarea eliminada!",
        });
        this.getTask();
      });
  }

  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a href="/" className="navbar-brand">
              Demo W28
            </a>
          </div>
        </nav>

        <div className="container">
          {/* Mensaje */}
          <div className="row">
            <div className="col-12">
              {this.state.mensaje ? (
                <div className="alert alert-warning" role="alert">
                  <p className="mb-0">{this.state.message}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row">
            {/* Formulario de registro de tareas */}
            <div className="col-4">
              <div className="card-body">
                <h4 className="card-title">Tarea</h4>
                <form onSubmit={this.sendTask}>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="titulo"
                        className="form-control"
                        placeholder="Titulo"
                        value={this.state.titulo}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="tiempo"
                        className="form-control"
                        placeholder="Tiempo para la tarea (min)"
                        value={this.state.tiempo}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="responsable"
                        className="form-control"
                        placeholder="Responsable de la tarea"
                        value={this.state.responsable}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="descripcion"
                        className="form-control"
                        placeholder="Descripción"
                        value={this.state.descripcion}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
                        className="ml-2 form-control btn btn-primary"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Tabla de tareas */}
            <div className="col-8">
              <table className="table">
                <thead>
                  <tr>
                    <td>Tarea</td>
                    <td>Tiempo</td>
                    <td>Responsable</td>
                    <td>Descripción</td>
                    <td>Opciones</td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tareas.map((tarea) => {
                    return (
                      <tr key={tarea._id}>
                        <td>{tarea.titulo}</td>
                        <td>{tarea.tiempo}</td>
                        <td>{tarea.responsable}</td>
                        <td>{tarea.descripcion}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => this.editTask(tarea._id)}
                          >
                            <i className="small material-icons">edit</i>
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => this.deleteTask(tarea._id)}
                          >
                            <i className="samll material-icons">delete</i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
