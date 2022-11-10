const fs = require(`fs`);

function readDb(dbName = "db.json") {
  const data = fs.readFileSync(dbName, `utf-8`);
  return JSON.parse(data);
}

function writeDb(obj, dbName = "db.json") {
  if (!obj) return console.warn(`Did not recieve data for database`);

  try {
    fs.writeFile(dbName, JSON.stringify(obj, null, 2), (async) => {
      return console.log(`Added object`);
    });
  } catch (err) {
    console.warn(err);
  }
}

module.exports = { readDb, writeDb };
