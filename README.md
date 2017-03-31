# Exove ESLint Node.js configuration

## Installation

	npm install --save-dev eslint-config-exove-nodejs babel-eslint

Create a file `.eslintrc.js` in the same folder where `package.json` is located with the following contents:

	module.exports = {
		parser: 'babel-eslint',
		extends: 'exove-nodejs',
	};

	