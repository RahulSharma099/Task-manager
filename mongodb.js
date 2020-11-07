// CRUD create read update and delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5fa227cc70f97417dccbab76") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unale to fetch!");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 20 })
    //   .toArray((error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch users!");
    //     }

    //     console.log(user);
    //   });

    db.collection("tasks").findOne(
      { _id: new ObjectID("5fa21bcc7168454f006b49c2") },
      (error, task) => {
        if (error) {
          return console.log("Unale to fetch!");
        }

        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, task) => {
        if (error) {
          return console.log("Unale to fetch!");
        }

        console.log(task);
      });
  }
);
