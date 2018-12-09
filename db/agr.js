var MongoClient = require("mongodb").MongoClient,
  assert = require("assert");

var url = "mongodb://localhost";

function findMoviesWithAggregation(adultValue, callback) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true },
    function(err, client) {
      var db = client.db("test");

      assert.equal(null, err);
      console.log("Connected successfully to server");

      var collection = db.collection("collectionOfMovies");
      collection
        .aggregate([
          { $match: { adult: adultValue } },
          {
            $group: {
              _id: "$original_language",
              totalvote_count_sum: { $sum: "$vote_count" }
            }
          }
        ])
        .toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          console.log(docs);
          callback(docs);
        });
    }
  );
}

module.exports = { findMoviesWithAggregation };
