<link rel="stylesheet" href="./styles/styles.css">
<div class="logo-container">
<img src="./pictures/logo.png" alt="CRYPTICUS" width=200px class="logo"/>
</div>

# Crypticus

![npm](https://img.shields.io/npm/v/crypticus?style=flat&logo=NPM&logoColor=red)
[![npm downloads](https://img.shields.io/npm/dm/encode.svg)](https://www.npmjs.com/package/crypticus)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/exagonsoft/Crypticus/main?style=flat&logo=github&logoColor=red)
![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/exagonsoft/Crypticus?style=flat&logo=jira&logoColor=yellow)
![Codecov branch](https://img.shields.io/codecov/c/github/exagonsoft/Crypticus/main?style=flat&logo=github&logoColor=red)
![GitHub](https://img.shields.io/github/license/exagonsoft/Crypticus?style=flat&logo=Medium&logoColor=green)

Crypticus is a high-performance npm package designed to simplify JSON encoding operations in JavaScript projects. This lightweight library empowers developers to seamlessly encode JavaScript objects into JSON format, facilitating smooth data transmission, storage, and interchange. Encode is engineered for simplicity, speed, and reliability, making it the ideal choice for handling JSON encoding tasks efficiently.

## Features

- **Effortless Encoding:** Streamline JSON encoding with a user-friendly and intuitive interface.
- **Lightweight and Fast:** Minimal footprint and optimized algorithms for lightning-fast encoding operations.
- **Versatile Compatibility:** Compatible with various JavaScript frameworks and environments, ensuring flexibility in your projects.
- **Reliable and Error-Tolerant:** Robust error handling ensures reliability even in the face of unexpected data.
- **Community-Driven:** Actively maintained and supported by a vibrant developer community, ensuring ongoing improvements and updates.

## Installation

Install Encode via npm:

```bash
npm install crypticus
```
<br />



# Usage

Require Crypticus in your JavaScript file and start encoding objects to JSON effortlessly:

```javascript
const crypticus = require('crypticus');

const data = {
  key: 'value',
  nested: {
    array: [1, 2, 3],
    boolean: true
  }
};

const encodedJSON = crypticus(data);
console.log(encodedJSON);
```
<br />

# Example
Here's a basic example of encoding a JavaScript object to JSON using Crypticus.
```javascript
const crypticus = require('crypticus');

const data = {
  name: 'John Doe',
  age: 30,
  isDeveloper: true,
  languages: ['JavaScript', 'Python', 'Java']
};

const encodedJSON = crypticus(data);
console.log(encodedJSON);
```
```console
E:\my_project> sdf.k;lfmsd/fsd,fmmsdfsfmsdfmsd;f'sdf;lskdfksldkflsd';lfklsdkf;s'dflksdf
```

# Contributing
Contributions are welcome! For bug reports or requests, please submit an issue or make a pull request. For more information, check out our contribution guidelines.

