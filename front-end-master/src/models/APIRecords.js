
export default class APIRecords {
    constructor(_id, CreatedBy,Version,Swagger,Link,Request,apiname,dateCreated,description,access) {
      this._id = _id;
      this.CreatedBy = CreatedBy;
      this.description=description;
      this.Version=Version;
      this.Swagger = Swagger;
      this.Link = Link;
      this.Request=Request;
      this.apiname = apiname;
      this.dateCreated=dateCreated;
      this.access=access;
    }
  }