const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ooeef.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()
app.use(express.json());
app.use(cors());


const port = 5000;

// console.log(process.env.DB_USER);


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const products = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);
    const orders = client.db(process.env.DB_NAME).collection("orders");
    // console.log("db connected");

    // perform actions on the collection object
    app.post('/addProduct', (req, res) => {
        const productsCollection = req.body;
        // console.log(productsCollection);
        products.insertOne(productsCollection)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount);
            })
    })

    app.get('/products', (req, res) => {
        products.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    app.get('/product/:key', (req, res) => {
        products.find({ key: req.params.key })
            .toArray((err, documents) => {
                res.send(documents[0]);
            })
    })

    app.post('/productsByKeys', (req, res) => {
        const productKeys = req.body;
        products.find({ key: { $in: productKeys } })
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    app.post('/addOrder', (req, res) => {
        const order = req.body;
        orders.insertOne(order)
            .then(result => {
                res.send(result.insertedCount > 0);
            })
    })
});

app.listen(port);