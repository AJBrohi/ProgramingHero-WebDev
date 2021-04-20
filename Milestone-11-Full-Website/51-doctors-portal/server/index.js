const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const fileUpload = require('express-fileupload');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ooeef.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('doctors'));
app.use(fileUpload());

const port = 5000;

app.get('/', (req, res) => {
    res.send("db connected");
})

client.connect(err => {
    const appointmentCollection = client.db(process.env.DB_NAME).collection("appointments");

    app.post('/addAppointment', (req, res) => {
        const appointment = req.body;
        appointmentCollection.insertOne(appointment)
            .then(result => res.send(result.insertedCount > 0))
            .catch(error => console.log(error))
    })

    app.post('/appointmentsByDate', (req, res) => {
        const date = req.body;
        console.log(date.date);
        appointmentCollection.find({ date: date.date })
            .toArray((error, documents) => {
                res.send(documents);
            })

    })

    app.post('/addDoctor', (req, res) =>{
        const file = req.files.file;
        const name = req.body.name;
        const email = req.body.email;
        console.log(name, email, file);
        file.mv(`${__dirname}/doctors/${file.name}`, err => {
            if(err)
            {
                console.log(err);
                return res.status(500).send({msg: "Image Upload Failed"});
            }
            return res.send({name: file.name, path: `/${file.name}`});
        });
    })
});

app.listen(process.env.PORT || 5000);