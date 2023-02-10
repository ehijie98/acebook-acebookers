

Launch mongoDB in terminal
```
mongo
```
To view all databases

```
show dbs
```

Connect to database

```javascript
use testdb
```

Collections are akin to tables that we use in SQL databses

to create a new collection:

```javascript
db.createCollection("users")
```

 
```javascript
// to add a document to a collection use this method
.insert()
```
This will insert a document with the fields 'name' and 'email' into the users collection, which is in the testdb database

```javascript
db.users.insertOne({
  name: "alice",
  email: "alice@email.com"
})
//this method will assign an id automatically
```
Verify  document has been added

```javascript
//use the find method to return all documents in the collection
db.users.find()
```
To insert more than one document into a collection

```javascript
db.users.insertMany([
  //within square brackets you can add multiple documents 
  {
    name: "bob",
    email: "bob@email.com"
  },
  {
    name: "carol",
    email: "carol@email.com"
  }
])
//this method will also assign an id automatically as an 'ObjectId'

```
