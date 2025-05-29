const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

app.use(cors());

app.all('/graphql', createHandler({
  schema: schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});