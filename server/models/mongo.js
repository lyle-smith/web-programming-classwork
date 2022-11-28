const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://lyman93:<Dailypotato357!>@cluster0.uai8elm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = {
  connect: () => client.connect(),
}
