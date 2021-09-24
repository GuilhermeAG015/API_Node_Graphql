const { GraphQLScalarType } = require('graphql')

const userResolvers = {
    RolesType: {
        ESTUDANTE: "ESTUDANTE",
        DOCENTE: "DOCENTE",
        COORDENACAO: "COORDENACAO"
    },
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora no formato ISO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value) 
    }),
    
    Query: {
        users: (root, args, { dataSources }) => dataSources.userAPI.getUsers(),
        user: (root, { id }, { dataSources } ) => dataSources.userAPI.getUserById(id)
    },

    Mutation: {
        addUser: async (root, { user }, { dataSources }) => dataSources.userAPI.addUser(user),
        refreshUser: async ( root, newData, { dataSources } ) => dataSources.userAPI.refreshUser(newData),
        deleteUser: async (root, { id } , { dataSources }) => dataSources.userAPI.deleteUser(id) 
    }
}

module.exports = userResolvers