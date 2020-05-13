var fs=require('fs')
var os=require('os')
var path='./data'
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/bezkoder_db';
var options = {
  server: { socketOptions: { keepAlive: 1 } },
  replset: { socketOptions: { keepAlive: 1 } }
};

function uploadIntoMongo(apiInfo){
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
   db.collection('apirecords').insertOne( apiInfo, function(err, result) {
     db.close();
  });
    
});
}

var directories=fs.readdirSync(path)
directories.forEach(function(dir){
	files=fs.readdirSync(path+'/'+dir)
	files.forEach(function(file){
		var oneApi={}
		oneApi['CreatedBy']=dir.split('-').join(' ');
		oneApi['Version']=1
		swagger=JSON.parse(fs.readFileSync(path+'/'+dir+'/'+file))
		oneApi['Swagger']=JSON.stringify(swagger)
		var word=swagger.info.title
		word=word.split(' ')
  		if(word[word.length-1]=='api'||word[word.length-1]=='API'){delete word[word.length-1]}
  		oneApi["apiname"]=word.join(' ').trim()
  		oneApi['_id']=oneApi['apiname']+'-'+1 //1 for default version
  		oneApi['dateCreated']=new Date()
  		oneApi['dateModified']=new Date()
  		
  		//OperationsName and verbAvailable
  		var op={
    		"name":Object.keys(swagger.paths),
    		"verb":[]
  		}
  		op["name"].forEach(function(val){
  			op.verb=op.verb.concat(Object.keys(swagger.paths[val]))
		})
  		var unique = op.verb.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        })
  		op.verb=unique
  	oneApi["OperationsName"]=op.name;
  	oneApi["verbsAvailable"]=op.verb;  
  	oneApi["Description"]=swagger.info.description
  	oneApi['APITerms']=oneApi.apiname.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace('_',' ').split(' ');
 		oneApi['APITerms'].push(oneApi['apiname'])
    uploadIntoMongo(oneApi)
  

		})
})
