/**
 * Copyright 2020 Automation School, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const expressPlayground = require('graphql-playground-middleware-express').default

const { setup } = require('../setup')
const { initData } = require('./data');
const typeDefs = require('./api/type-defs');
const resolvers = require('./api/resolvers');

const port = setup.portNumber;
const useTestData = setup.useTestData;

const data = initData(useTestData);

const app = express();

const server = new ApolloServer({ typeDefs, resolvers, context: { data } });

server.applyMiddleware({ app, path: setup.graphqlPath });

app.get('/', (req, res) => {
  res.json({message: "Welcome to the Authors Books GraphQL API"});
  res.end();
});

app.get('/playground', expressPlayground());

app.listen({ port: port }, () =>
  console.log(`🚀GraphQL Server running at http://localhost:${port}${server.graphqlPath}`)
);