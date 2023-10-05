export function applyXOR(value, key) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
        result += String.fromCharCode(value.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

export function readXOR(encryptedValue, key) {
    let result = "";
    for (let i = 0; i < encryptedValue.length; i++) {
        result += String.fromCharCode(encryptedValue.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}