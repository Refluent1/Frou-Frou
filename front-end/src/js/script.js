const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const icon = document.querySelector(".icon");
import data from "../../db.json" assert { type: "json" };
import { readDb, writeDb } from "../database/dbFunctions.js";
let imageDb;

icon.addEventListener("click", (event) => {
  icon.classList.toggle("open");
});

data.forEach((user) => {
  console.log(`User is: ${user.name}`);
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header]");
  const body = card.querySelector("[data-body]");
  const image = card.querySelector(`[data-status]`);

  image
    .addEventListener("click", (event) => {
      switch (image.src) {
        case "https://iili.io/yI8clt.md.png":
          image.src = "https://iili.io/yI87iN.md.png";
          image.title = "Starting...";
          imageDb = "https://iili.io/yI87iN.md.png";
          break;

        case "https://iili.io/yI87iN.md.png":
          image.src = "https://iili.io/yI8afI.md.png";
          image.title = "Finished!";
          imageDb = "https://iili.io/yI8afI.md.png";
          break;

        case "https://iili.io/yI8afI.md.png":
          image.src = "https://iili.io/yI8clt.md.png";
          image.title = "Not Started";
          break;

        default:
          break;
      }
    })
    .then(() => {
      writeDb(imageDb);
    })

    header.textContent = user.name;
    body.textContent = user.email;
    userCardContainer.append(card);
    return { name: user.name, email: user.email, element: card };
});





//Search System

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible = user.name.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});
