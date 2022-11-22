const express = require("express");
const app = express();
const path = require("path");
const vhost = require("vhost");
const staff = express();


const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;



//? ROUTES





//* STAFF SUBDOMAIN

app.use(vhost(`staff.froufrou.me`, staff));

staff.get('/orders', (req, res) => {
    res.sendFile(path.resolve('../../front-end/orders.html'));
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(`../../front-end/index.html`));
  });
  
  app.get("/database", (req, res) => {
    res.sendFile(path.resolve(`../../front-end/database.html`));
  });


  //* CSS ROUTES

  app.get("/src/css/basic.css", (req, res) => {
    res.sendFile(path.resolve(`../../front-end/src/css/basic.css`));
  });
  
  app.get("/src/css/orders.css", (req, res) => {
    res.sendFile(path.resolve(`../../front-end/src/css/orders.css`));
  });

  app.get("/src/css/orders.css", (req, res) => {
    res.sendFile(path.resolve(`../../front-end/src/css/orders.css`));
  });

  
  //* JAVASCRIPT ROUTES

  app.get("/src/js/script.js", (req, res) => {
    res.sendFile(path.resolve(`../../front-end/src/js/script.js`));
  });

  app.get("/src/js/pass.js", (req, res) => {
    res.sendFile(path.resolve(`../../front-end/src/js/pass.js`));
  })



  //* IMAGE ROUTES

  app.get("/src/images/logo.png", (req, res) => {
    res.sendFile(path.resolve(`../../front-end/src/images/logo.png`));
  })

  app.get("/src/images/background-404.svg", (req, res) => {
    res.sendFile(path.resolve(`../../front-end/src/images/background-404.svg`));
  })


  //! 404 ROUTES 
  //! NO ROUTE SHOULD BE UNDER THIS

  app.use((req, res, next) => {
    res.status(404).sendFile(path.resolve(`../../front-end/404.html`));
  })

  



  //? PORT LISTENER

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});

