const { applyXOR, readXOR, generateRandomBase64String } = require("./utils/codex")

 module.exports.encode = (target, key = null) => {
  let _encodedValue = "";

  try {
    _encodedValue = btoa(target);
    if (key) {
      _encodedValue = applyXOR(_encodedValue, key);
    }
    let _extraCodexAfter = generateRandomBase64String(10)
    let _extraCodexBefore = generateRandomBase64String(10)
    return _extraCodexAfter + _encodedValue + _extraCodexBefore;
  } catch (error) {
    return "Error encoding object.";
  }
};

module.exports.decode = (value, key = null) => {
  let _decodedValue = "";
  value = value.slice(10, -10)

  try {
    if (key) {
      _decodedValue = readXOR(value, key);
    }

    _decodedValue = atob(_decodedValue);

    return _decodedValue;
  } catch (error) {
    return "Error decoding value.";
  }
};

module.exports.compare = (value, match, key = null) => {
  let _result = false;
  let _decodedValue = "";
  value = value.slice(10, -10)
  try {
    if (key) {
      _decodedValue = readXOR(value, key);
    }

    _decodedValue = atob(_decodedValue);

    _result = match === _decodedValue;

    return _result;
  } catch (error) {
    return "Error while comparing values.";
  }
};
