import { applyXOR, readXOR } from "./utils/codex";

export const encode = (target, key = null) => {
  let _encodedValue = "";

  try {
    _encodedValue = btoa(target);
    if (key) {
      _encodedValue = applyXOR(_encodedValue, key);
    }

    return _encodedValue;
  } catch (error) {
    return "Error encoding object.";
  }
};

export const decode = (value, key = null) => {
  let _decodedValue = "";

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

export const compare = (target, match, key = null) => {
  let _result = false;
  let _decodedValue = "";
  try {
    if (key) {
      _decodedValue = readXOR(value, key);
    }

    _decodedValue = atob(_decodedValue);

    _result = target === _decodedValue;

    return _result;
  } catch (error) {
    return "Error while comparing values.";
  }
};
