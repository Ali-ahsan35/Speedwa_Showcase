const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@practiceproject.e4a83.mongodb.net/?retryWrites=true&w=majority&appName=PracticeProject`;

console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
     await client.connect();

    const carCollection = client.db("carDB").collection("cars");
    const userCollection = client.db("carDB").collection("users");

    app.get("/cars", async (req, res) => {
      const cursor = carCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/cars/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await carCollection.findOne(query);
        res.send(result);
    })

    app.get("/brand/cars/:name", async(req, res)=>{
        const Brand = req.params.name;
        const query = {Brand}
        const cursor = carCollection.find(query);
        const result = await cursor.toArray();
        console.log(result);
        res.send(result);
    })


    app.post("/cars", async (req, res) => {
      const newProduct = req.body;
      console.log(newProduct);
      const result = await carCollection.insertOne(newProduct);
      res.send(result);
    });

    app.put("/cars/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = { upsert: true};
      const updatedCar = req.body;
      const Car = {
        $set: {
          Brand: updatedCar.Brand, 
          Type: updatedCar.Type, 
          Car_Name: updatedCar.Car_Name,
          Price: updatedCar.Price, 
          Model: updatedCar.Model, 
          Photo: updatedCar.Photo, 
          rating: updatedCar.rating, 
          description: updatedCar.description
        }
      }
      const result = await carCollection.updateOne(filter,Car, options)
      res.send(result);
    })

    // User related APIs
    app.post('/users', async(req, res)=>{
      const users = req.body;
      console.log(users);
      const result = await userCollection.insertOne(users);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Speedway Server is running");
});

app.listen(port, () => {
  console.log(`Speedway Server is running on port : ${port}`);
});

