const crypto = require(`crypto`);
const fs = require('fs')



/**
 *
 * @typedef {string} UUID*/

/**
 * @UUID
 * Generate a UUID
 * @example const variable = UUID()
 */

const UUID = () => {
      return crypto.randomUUID();
};


//35cb98ed-b620-49e9-90c8-e6ebdb86b659


// Exporting functions

module.exports = { uuid };
