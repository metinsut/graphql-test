import { GraphQLObjectType, GraphQLString } from 'express-graphql';
import { GraphQLSchema } from 'graphql';

const PersonType = new GraphQLObjectType({
   name: 'person',
   fields: () => ({
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      position: { type: GraphQLString }
   })
});

export default GraphQLSchema;
