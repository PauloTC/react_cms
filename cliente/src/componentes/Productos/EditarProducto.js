import React, { Component, Fragment } from 'react';

import { Query } from 'react-apollo'

import { OBTENER_PRODUCTO } from '../../queries'

import FormularioEditar from './FormularioEditarProducto'

class EditarProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        //tomar el ID para editar

        const { id } = this.props.match.params;

        console.log(id);

        return (
            <Fragment>
                <h1 className="text-center" >Editar Producto</h1>
                <div className="row justify-content-center" >
                    <Query  query={ OBTENER_PRODUCTO } variables={{ id }} >
                        { ( { loading, error,data,refetch } )  => {
                            if(loading) return "Cargando...";
                            if( error ) return ` Error ${ error.message } ` ;
                            return (
                                <FormularioEditar
                                    producto = { data }
                                    id= { id }
                                    refetch= { refetch } />
                            )
                        } }
                    </Query>
                </div>
            </Fragment>
        );
    }
}

export default EditarProducto;