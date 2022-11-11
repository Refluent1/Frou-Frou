const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const icon = document.querySelector('.icon');
import data from "../../db.json" assert { type: "json" };
console.log(data)
// import { readDb, writeDb } from "../database/dbFunctions";
let imageDb;



  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });



let users = [data];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

users = data.map((user) => {
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header]");
  const body = card.querySelector("[data-body]");
  const image = card.querySelector(`[data-status]`)

//Status Image: If red, make yellow, if yellow make green
image.addEventListener('click', (event) => {
  switch (image.src) {
    case "https://iili.io/yI8clt.md.png":
    image.src = "https://iili.io/yI87iN.md.png"
    image.title = "Starting..."
    imageDb = "https://iili.io/yI87iN.md.png"
    break;
    
    case "https://iili.io/yI87iN.md.png":
    image.src = "https://iili.io/yI8afI.md.png"
    image.title = "Finished!"
    imageDb = "https://iili.io/yI8afI.md.png"
    break;

    case "https://iili.io/yI8afI.md.png":
      image.src = "https://iili.io/yI8clt.md.png"
      image.title = "Not Started"
      break;

    default:
    break;
    }
}).then(() => {
  writeDb(imageDb)
})

  header.textContent = user.name;
  body.textContent = user.email;
  userCardContainer.append(card);
  return { name: user.name, email: user.email, element: card };
})




// let i;
// const keys = Object.keys(readDb);
// const template = document.querySelector("[data-user-template]");
// const noneTemplate = document.querySelector("[data-user-noneTemplate]")
// let users = [];

// fetch(`../../db.json`).then((data) => {

// //If no user is found, will clone a div
// if(keys.length == 0) {
//   const card = noneTemplate.content.cloneNode(true).children[0];
//   const header = card.querySelector("[data-user-noTemp-h1]");

//   header.textContent = `No results were found!`
//   userCardContainer.append(card);

// } else {

//     //Mapping every user, then creating a div with their info
//   users = data.map((user) => {
//     const card = template.content.cloneNode(true).children[0];
//     const header = card.querySelector("[data-header]");
//     const body = card.querySelector("[data-body]");

//     header.textContent = user.name;
//     body.textContent = `Invoice Number: ${user.invoice} | User Email: ${user.email}`;
//     userCardContainer.append(card);
//     return { name: user.name, email: user.email, element: card };
//   });
// }

// });

// for (i = 0, length = keys.length; i < length; i++) {
//   const card = template.content.cloneNode(true);
//   const textNode = document.createTextNode(
//     `Name: ${user.name}\nPhone Number: ${user.phone}\nEmail Address: ${user.email}\nInvoice Number: ${user.invoice}\nUser Number: ${i}`
//   );
//   textNode.classList.add(`profile`);
//   card.appendChild(textNode);
// }

// const user = `order.User_${i}`;
// for (const user in readDb) {
// }

// const object = {};

// console.log("WOW" + wow + "intriguing");

// writeDb(object);
