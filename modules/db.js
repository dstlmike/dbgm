//
var sampledb = "sampledb";
//var collection = db.sampledb.collection("test");
/*
var { MongoClient } = require('mongodb');
var { MongoClient, ServerApiVersion } = require('mongodb');
var fs = require('fs');

var credentials = fs.readFileSync('<path_to_certificate>');

var client = new MongoClient('mongodb://cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials
});

async function run() {
  try {
    await client.connect();
    var database = client.db("testDB");
    var collection = database.collection("testCol");
    var  docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//run().catch(console.dir);



var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://alexbot:308boonave@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/gm?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  var collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/


//var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://dstlmike1:308boonave@ac-cbqypvj-shard-00-00.f8ibx0h.mongodb.net:27017,ac-cbqypvj-shard-00-01.f8ibx0h.mongodb.net:27017,ac-cbqypvj-shard-00-02.f8ibx0h.mongodb.net:27017/sampledb1?ssl=true&replicaSet=atlas-6t91cm-shard-0&authSource=admin&retryWrites=true&w=majority";
/*
MongoClient.connect(uri, function(err, db) {
  var cursor = db.collection("sampledb").find({"name": 1});
    var ret = [];
    cursor.each(function(err, doc){
      //if(doc != null)
        //ret.push(doc);
      //else
        //callback(ret);

  //const collection = client.db("sampledb").collection("rooms");
  // perform actions on the collection object
//var allDocs = collection.find({"name": 1}).toArray(function(err, docs) {
       console.log(ret);
  client.close();
});

});

*/
/*

var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
MongoClient.connect("mongodb://alexbot:308boonave@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", function(err, db) {
  if (err) throw err;
  var dbo = db.db("sampledb"); //Find all documents in the customers collection:
  dbo.collection("rooms").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

*/

var mongoDB     = require('mongodb').MongoClient;
//var db = require('mongodb').Db;
var connection_string = "mongodb://user2:user2@ac-ykrrwag-shard-00-00.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-01.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-02.hneglt3.mongodb.net:27017/sampledb?ssl=true&replicaSet=atlas-u69sga-shard-0&authSource=admin&retryWrites=true&w=majority";
//var connection_string = "mongodb://alexbot:308boonave@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/gm?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
//var connection_string = "mongodb://alexbot:308boonave@cluster0-shard-00-02.esmha.mongodb.net:27017/gm?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
//'mongodb://' + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/gm?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'; //mongodb://127.0.0.1:27017/nodejs';
//if(process.env.MONGODB_PASSWORD){
  // //connection_string = 'mongodb://dstl%5Fmike1%40hotmail%2Ecom:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority' + process.env.MONGODB_USER + ":" +
 // connection_string = 'mongodb://alexbot:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/gm?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'; // + process.env.MONGODB_USER + ":" +
//  process.env.MONGODB_PASSWORD + "@" +
 // process.env.MONGODB_SERVICE_HOST + ':' +
 // process.env.MONGODB_SERVICE_PORT + '/' +
  //process.env.MONGODB_DATABASE;
//}
function connect(callback){
  mongoDB.connect(connection_string, function(err, db) {
    if(err) throw err;
    callback(db);
  });
}

exports.getAllDocuments = async function(collection, callback) {
  mongoDB.connect(connection_string, function(err, db) {
    if(err) throw err;
    var dbName = db.collection("sampledb").collection("test");
    var allDocs = db.collection(collection).find().toArray(function(err, docs) {
    alldocs; //  callback(docs);
      console.log(allDocs);
    db.close();
     allDocs;
   //   allDocs;
    });
  });
}

exports.findDocs = async function(collection, matchHash, callback) {
  mongoDB.connect(connection_string, function(err, db) {

    var cursor = db.collection(collection).find(matchHash);
    var ret = [];
    cursor.each(function(err, doc){
      if(doc != null)
        ret.push(doc);
      else
        callback(ret);
    });
  });
}

exports.addDoc = function(collection, doc, callback) {
  mongoDB.connect(connection_string, function(err, db) {

    var ret = db.collection(collection).insert(doc, function(err, result){
      if (callback)
        callback(result);
      db.close();
    });
  });
}

exports.updateOneDoc = function(collection, findJson, updateJson, callback) {
  mongoDB.connect(connection_string, function(err, db) {

    var ret = db.collection(collection).updateOne(findJson, updateJson, function(err, result) {
      if (callback)
        callback(result);
      db.close();
    })
  });
}

exports.removeOneDoc = function(collection, findJson, callback) {
  mongoDB.connect(connection_string, function(err, db) {

    var ret = db.collection(collection).deleteOne(findJson, function(err, result){
      if (callback)
        callback(result);
      db.close();
    });
  });
}

exports.countDocs = function (collection, callback) {
  mongoDB.connect(connection_string, function(err, db) {

    var ret = db.collection(collection).count(function(err, result){
      if (callback)
        callback(result);
      db.close();
    });
  });
}

exports.randomDoc = function(collection, callback) {
  mongoDB.connect(connection_string, function(err, db) {

    var coll = db.collection(collection);
    cursor = coll.find({});

    coll.count(function(err, count){
      var random = Math.floor(Math.random() * count);
      cursor.skip(random);
      cursor.limit(1);
      cursor.each(function(err, doc){
        if(doc != null){
          callback(doc);
          return;
        }
      });
    });
  });
}
