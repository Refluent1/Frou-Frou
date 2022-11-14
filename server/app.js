const express = require(`express`);
const app = express();
const cors = require(`cors`);
const dotenv = require(`dotenv`);

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create
app.post("/insert", (request, response) => {
});

//Read
app.get("/getAll", (request, response) => {
  response.json({
    success: true
  })
});

app.listen('3000', () => console.log(`Application has responded`));
