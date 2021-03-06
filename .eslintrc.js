module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		// 'airbnb-base'
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 0,
		'comma-dangle': 0,
		'arrow-parens': 0,
		'no-confusing-arrow': 0,
		'no-nested-ternary': 0,
		'no-use-before-define': 0,
		'no-console': 0,
		'no-await-in-loop': 0,
		'no-loop-func': 0,
		'implicit-arrow-linebreak': 0,
		'import/no-cycle': [
			0,
			{
				'maxDepth': 1
			}
		],
		'max-len': [
			'error',
			120
		],
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'operator-linebreak': 0
	},
	overrides: [{
		files: [
			'**/__tests__/*.{j,t}s?(x)',
			'**/tests/unit/**/*.spec.{j,t}s?(x)',
		]
	},],
}