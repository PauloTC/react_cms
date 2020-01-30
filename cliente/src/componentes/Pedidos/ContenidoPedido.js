import React, { Component, Fragment } from 'react';

import Select from 'react-select'
import Animated from 'react-select/animated'
import Resumen from './Resumen';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

class ContenidoPedido extends Component {
    
    state = {
        productos : []
    }

    seleccionarProducto = (productos) => {
        
        this.setState({
            productos
        })

    }

    render() {
        return (
            <Fragment>
                <h2  className="text-center mb-5" >Seleccionar Articulos</h2>
                <Select
                    isMulti
                    onChange= { this.seleccionarProducto }
                    placeholder= "Seleccionar Productos"
                    components= {  Animated() }
                    getOptionValue = { (options) => options.id}
                    getOptionLabel = { (options) => options.nombre}
                    options={this.props.productos} />

                <Resumen 
                    productos = { this.state.productos }
                />
            </Fragment>
        );
    }
}

export default ContenidoPedido;