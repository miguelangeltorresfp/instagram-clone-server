const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolvers');
require('dotenv').config({ path: '.env' });

mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (err, _) => {
    if (err) {
      console.error('Error de conexión => err: ', err);
    } else {
      apolloServer();
    }
  }
);

function apolloServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Lo arranco en otra url para que muestre una interfaz limpia, sin queries de otros proyectos
  apolloServer.listen({ port: 5000 }).then(({ url }) => {
    console.log('###############################');
    console.log(`Servidor listo en la url ${url}`);
    console.log('###############################');
  });
}
