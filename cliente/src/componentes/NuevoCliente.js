import React, { Component , Fragment } from 'react'

class NuevoCliente extends Component {

    state = {
        cliente: {
            nombre: '',
            apellido: '',
            empresa: '',
            edad: '',
            email: '',
            tipo: ''
        }
    }

    render () {
        return (
            <Fragment>
                <h3 className="text-center" >Nuevo Cliente</h3>
                <div className="row justify-content-center"  >
                    <form className="col-md-8 m-3" >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre"
                                    onChange= { e => {
                                        this.setState({ 
                                            cliente: { 
                                                ...this.state.cliente,
                                                nombre: e.target.value
                                             }
                                         })
                                     }}
                                    />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Apellido</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Apellido"
                                    onChange= { e => {
                                        this.setState({ 
                                            cliente: {
                                                ...this.state.cliente,
                                                apellido: e.target.value
                                             }
                                         })
                                     }}
                                    />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Empresa</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Empresa"
                                    onChange= { e => {
                                        this.setState({ 
                                            cliente: {
                                                ...this.state.cliente,
                                                empresa: e.target.value
                                             }
                                         })
                                     }}
                                    />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    onChange= { e => {
                                        this.setState({ 
                                            cliente: {
                                                ...this.state.cliente,
                                                email: e.target.value
                                             }
                                         })
                                     }}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Edad</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Edad"
                                    onChange= { e => {
                                        this.setState({ 
                                            cliente: {
                                                ...this.state.cliente,
                                                edad: e.target.value
                                             }
                                         })
                                     }}
                                    />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Tipo Cliente</label>  
                                <select className="form-control">
                                    <option value="">Elegir...</option>
                                    <option value="PREMIUM">PREMIUM</option>
                                    <option value="BASICO">BÁSICO</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                    </form>
                </div>
    
            </Fragment>
        )
    }


}

export default NuevoCliente