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
  let result = "";
  const characters = Array.from(baseChartSet);
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  }

  return result;
};
