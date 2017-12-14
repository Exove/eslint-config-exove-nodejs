module.exports = {
	extends: 'eslint:recommended',
	env: {
		es6: true,
		node: true,
	},

	rules: {
		'array-bracket-spacing': [ 2, 'always' ],
		'comma-dangle': [ 2, {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],
		'comma-spacing': [ 2, { after: true } ],
		'computed-property-spacing': [ 2, 'never' ],
		'eol-last': [ 2, 'always' ],
		'dot-notation': [ 2 ],
		'indent': [ 2, 'tab' ],
		'key-spacing': [ 2, { beforeColon: false, afterColon: true } ],
		'keyword-spacing': [ 2, { before: true, after: true } ],
		'no-cond-assign': [ 2 ],
		'no-duplicate-imports': [ 2 ],
		'no-extra-semi': [ 2 ],
		'no-multi-spaces': [ 2 ],
		'no-spaced-func': [ 2 ],
		'no-sync': [ 2 ],
		'no-trailing-spaces': [ 2 ],
		'no-var': [ 2 ],
		'object-curly-spacing': [ 2, 'always' ],
		'object-shorthand': [ 2 ],
		'prefer-const': [ 2 ],
		'prefer-spread': [ 2 ],
		'semi': [ 2, 'always' ],
		'semi-spacing': [ 2, { before: false, after: true } ],
		'space-before-blocks': [ 2, 'always' ],
		'space-before-function-paren': [ 2, {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always',
		}],
		'space-in-parens': [ 2 ],
		'space-infix-ops': [ 2 ],
		'space-unary-ops': [ 2, { words: true, nonwords: false } ],
		'spaced-comment': [ 2 ],
	},
};
