const userResolvers = {
    Query: {
        users: (root, args, { dataSources }) => dataSources.userAPI.getUsers(),
        user: (root, { id }, { dataSources } ) => dataSources.userAPI.getUserById(id)
    },

    Mutation: {
        addUser: async (root, user, { dataSources }) => dataSources.userAPI.addUser(user),
        refreshUser: async ( root, newData, { dataSources } ) => dataSources.userAPI.refreshUser(newData),
        deleteUser: async (root, { id } , { dataSources }) => dataSources.userAPI.deleteUser(id) 
    }
}

module.exports = userResolvers