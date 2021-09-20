const userResolvers = {
    Query: {
        users: (root, args, { dataSources }) => dataSources.UserAPI.getUsers() 
    }
}

module.exports = userResolvers