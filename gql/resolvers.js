const resolvers = {
  Query: {
    // User
    getUser: () => {
      console.log('Obteniendo usuario');

      return null;
    },
  },
};

module.exports = resolvers;
