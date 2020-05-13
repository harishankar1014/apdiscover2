var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/bezkoder_db';
var options = {
  server: { socketOptions: { keepAlive: 1 } },
  replset: { socketOptions: { keepAlive: 1 } }
};
arr=[
  {
    "_id": "get",
    "keyword": "get",
    "verb": ["get"]
  },
  {
    "_id": "bring",
    "keyword": "bring",
    "verb": ["get"]
  },
  {
    "_id": "draw",
    "keyword": "draw",
    "verb": ["get"]
  },
  {
    "_id": "have",
    "keyword": "have",
    "verb": ["get"]
  },
  {
    "_id": "obtain",
    "keyword": "obtain",
    "verb": ["get"]
  },
  {
    "_id": "pull",
    "keyword": "pull",
    "verb": ["get"]
  },
  {
    "_id": "retrieve",
    "keyword": "retrieve",
    "verb": ["get"]
  },
  {
    "_id": "access",
    "keyword": "access",
    "verb": ["get"]
  },
  {
    "_id": "acquire",
    "keyword": "acquire",
    "verb": ["get"]
  },
  {
    "_id": "extract",
    "keyword": "extract",
    "verb": ["get"]
  },
  {
    "_id": "fetch",
    "keyword": "fetch",
    "verb": ["get"]
  },
  {
    "_id": "procure",
    "keyword": "procure",
    "verb": ["get"]
  },
  {
    "_id": "select",
    "keyword": "select",
    "verb": ["get"]
  },
  {
    "_id": "import",
    "keyword": "import",
    "verb": ["get"]
  },
  {
    "_id": "gather",
    "keyword": "gather",
    "verb": ["get"]
  },
  {
    "_id": "yield",
    "keyword": "yield",
    "verb": ["get"]
  },
  {
    "_id": "return",
    "keyword": "return",
    "verb": ["get"]
  },
  {
    "_id": "find",
    "keyword": "find",
    "verb": ["get"]
  },
  {
    "_id": "discover",
    "keyword": "discover",
    "verb": ["get"]
  },
  {
    "_id": "delete",
    "keyword": "delete",
    "verb": ["delete"]
  },
  {
    "_id": "destroy",
    "keyword": "destroy",
    "verb": ["delete"]
  },
  {
    "_id": "remove",
    "keyword": "remove",
    "verb": ["delete"]
  },
  {
    "_id": "eliminate",
    "keyword": "eliminate",
    "verb": ["delete"]
  },
  {
    "_id": "exclude",
    "keyword": "exclude",
    "verb": ["delete"]
  },
  {
    "_id": "wipe",
    "keyword": "wipe",
    "verb": ["delete"]
  },
  {
    "_id": "clean",
    "keyword": "clean",
    "verb": ["delete"]
  },
  {
    "_id": "drop",
    "keyword": "drop",
    "verb": ["delete"]
  },
  {
    "_id": "trim",
    "keyword": "trim",
    "verb": ["delete"]
  },
  {
    "_id": "post",
    "keyword": "post",
    "verb": ["post"]
  },
  {
    "_id": "insert",
    "keyword": "insert",
    "verb": ["post"]
  },
  {
    "_id": "create",
    "keyword": "create",
    "verb": ["post"]
  },
  {
    "_id": "new",
    "keyword": "new",
    "verb": ["post"]
  },
  {
    "_id": "build",
    "keyword": "build",
    "verb": ["post"]
  },
  {
    "_id": "construct",
    "keyword": "construct",
    "verb": ["post"]
  },
  {
    "_id": "generate",
    "keyword": "generate",
    "verb": ["post"]
  },
  {
    "_id": "fill",
    "keyword": "fill",
    "verb": ["post"]
  },
  {
    "_id": "write",
    "keyword": "write",
    "verb": ["post"]
  },
  {
    "_id": "enter",
    "keyword": "enter",
    "verb": ["post"]
  },
  {
    "_id": "put",
    "keyword": "put",
    "verb": ["put"]
  },
  {
    "_id": "modify",
    "keyword": "modify",
    "verb": ["put","patch","post"]
  },
  {
    "_id": "correct",
    "keyword": "correct",
    "verb": ["put","patch","post"]
  },
  {
    "_id": "tweak",
    "keyword": "tweak",
    "verb": ["put","patch","post"]
  },
  {
    "_id": "update",
    "keyword": "update",
    "verb": ["put","patch","post"]
  },
  {
    "_id": "revise",
    "keyword": "revise",
    "verb": ["put","patch","post"]
  },
  {
    "_id": "renew",
    "keyword": "renew",
    "verb": ["put","patch","post"]
  },
  {
    "_id": "fix",
    "keyword": "fix",
    "verb": ["put","patch","post"]
  },
  {
    "_id": "patch",
    "keyword": "patch",
    "verb": ["patch"]
  }
]

MongoClient.connect(url,options, function(err, db) {
  assert.equal(null, err);
  arr.forEach(function(val){
  db.collection('verbDictionary').insertOne(val, function(err, result) {
    assert.equal(err, null);
  });})
db.close();});


