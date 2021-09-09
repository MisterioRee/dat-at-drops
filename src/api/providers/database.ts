const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://admin:<Password>@node-ecom-cluster.jmrtf.mongodb.net/drops?retryWrites=true&w=majority";
export const mongClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
