use APISearch
db.APIRecords.createIndex({ APITerms: 'text', Description: 'text', OperationsName: 'text', Swagger: 'text', WSDL: 'text', definitionName: 'text', portTypes: 'text', services: 'text' }, { name: 'APIRecords_txtidx', weights: { APITerms: 1000, Description: 200, OperationsName: 20, Swagger: 1, WSDL: 1, definitionName: 100, portTypes: 10, services: 10 } })
db.verbDictionary.createIndex({ keyword: 'text' })
exit