```javascript
// Correct usage of $inc operator
db.collection.updateOne({"_id": ObjectId("652a91023473567890abcdef")}, {"$inc": {"field": 1}});
```