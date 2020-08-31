import "../../graphql/schema";

import app, { server } from "nexus";

app.assemble();

export default server.handlers.graphql;

//https://developer.mongodb.com/how-to/nextjs-building-modern-applications/
//https://hoangvvo.com/blog/full-fledged-app-with-next-js-and-mongodb-part-1/
