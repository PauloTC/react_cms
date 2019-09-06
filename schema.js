import {buildSchema} from 'graphql'


const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
        emails: [Email]
    }
    type Pedido {
        producto: String
        precio: Int
    }
    type Email {
        email: String
    }

    type Query {
        getCliente( id: ID ) :  Cliente
    }

    enum TipoCliente {
        BASICO
        PREMIUN
    }

    input PedidoInput {
        producto: String
        precio: Int
    }

    input EmailInput {
        email: String
    }

    input ClienteInput {
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        edad: Int!
        tipo: TipoCliente!
        pedidos: [PedidoInput]
        emails: [EmailInput]
    }

    type Mutation {
        crearCliente( input: ClienteInput ) : Cliente
    }

`);

export default schema;