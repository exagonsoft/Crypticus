const crypto = require("crypto");

module.exports.applyXOR = (value, key) => {
  let result = "";
  for (let i = 0; i < value.length; i++) {
    result += String.fromCharCode(
      value.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return result;
};

module.exports.readXOR = (encryptedValue, key) => {
  let result = "";
  for (let i = 0; i < encryptedValue.length; i++) {
    result += String.fromCharCode(
      encryptedValue.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return result;
};

module.exports.generateRandomBase64String = (length) => {
  const randomBytes = crypto.randomBytes(Math.ceil((3 * length) / 4));
  return randomBytes.toString("base64").slice(0, length);
};
