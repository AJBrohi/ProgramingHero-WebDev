const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ooeef.mongodb.net/burjAlArab?retryWrites=true&w=majority`;

var serviceAccount = require("./configs/hello-firebase-world-b44ea-firebase-adminsdk-2nwcq-34435379e9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const port = 5000

const app = express()

app.use(cors());
app.use(express.json());


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const bookings = client.db("burjAlArab").collection("bookings");

  // perform actions on the collection object
  app.post("/addBooking", (req, res) => {
    const newBooking = req.body;
    bookings.insertOne(newBooking)
      .then(result => {
        res.send(result.insertedCount > 0);
      })
  })

  app.get('/bookings', (req, res) => {
    const bearer = req.headers.authorization;
    if (bearer && bearer.startsWith('Bearer ')) {
      const idToken = bearer.split(' ')[1];
      // idToken comes from the client app
      admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
          const tokenEmail = decodedToken.email;
          if (tokenEmail === req.query.email) {
            bookings.find({ email: req.query.email })
              .toArray((err, documents) => {
                res.status(200).send(documents);
              })
          }
          else{
            res.status(401).send("unauthorized");
          }
        })
        .catch((error) => {
          res.status(401).send("unauthorized");
        });
    }

    else{
      res.status(401).send("unauthorized");
    }
  })
});

app.listen(port);