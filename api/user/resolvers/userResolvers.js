const arrayusers = [
    {
        name: 'Guilherme',
        active: true
    },
    {
        name: 'Alexandre',
        active: false
    }
]

const userResolvers = {
    Query: {
        users: () => arrayusers,
        primeiroUser: () => arrayusers[0]
    }
}

module.exports = userResolvers