
var {MongoClient} = require('mongodb');
var createListing = require('./test.js');
async function main (){
  var uri = "mongodb+srv://user2:user2@cluster10.hneglt3.mongodb.net/test?retryWrites=true&w=majority";
var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
try {
  await client.connect();
  //await listDatabases(client);
  await createListing(
    client,
      {
    name: "Lovely Loft",
    summary: "A charming loft in Paris",
    bedrooms: 1,
    bathrooms: 1
  }

);
} catch (e){
  console.error(e);
} finally {
  await client.close();
}
}

async function connect (){
  var uri = "mongodb+srv://user2:user2@cluster10.hneglt3.mongodb.net/test?retryWrites=true&w=majority";
var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
try {
  await client.connect();
  //await listDatabases(client);
  await connectMain(
    client,
      {
    name: "Lovely Loft",
    summary: "A charming loft in Paris",
    bedrooms: 1,
    bathrooms: 1
  }

);
} catch (e){
  console.error(e);
} finally {
  await client.close();
}
}

async function connectMain(client, newListing) {
  var newListing = {

  name: newListing.name,
  summary: newListing.summary,
  bedrooms: newListing.bedrooms,
  bathrooms: newListing.bathrooms
}

  var result = await client.db("sampledb").collection("test").insertOne(newListing);
  //if (callback) callback(newListing);
  console.log(result, newListing);

}

main().catch(console.err);
//main().catch(console.err);


async function createListing(client, newListing){
  var newListing = {

  name: newListing.name,
  summary: newListing.summary,
  bedrooms: newListing.bedrooms,
  bathrooms: newListing.bathrooms
}

  var result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
  console.log(result, newListing);
}

//-----

async function listDatabases(client){
  var databasesList = await client.db().admin().listDatabases();
  console.log("Databases: ");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));

}

//-----
//exports.createListing = createListing;
exports.main = main;
