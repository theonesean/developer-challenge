# Actual Size Developer Challenge


## Instructions

1. Fork this repo, then clone the fork to your machine.
2. Install dependencies.
3. Start the development server with the defined `start` script.
4. Build the challenge page according to the provided specifications on Figma.


## Notes

* Use the existing Prismic data source for the Card component. An simple example of usage is on the starter page. Make sure to use the GraphiQL explorer (probably available at http://localhost:8000/___graphql)
* Fonts are already loaded via the `gatsby-plugin-web-font-loader`.


## Delivery

Please issue a Pull Request on the original repo with your submission.


## Rules

1. **Don't spend more than three hours on this challenge.**

2. **Google whatever you want. Ask as many questions as you need.**

3. **Write lots of inline documentation.**

4. **Ensure the entire project is linted and error-free according the `.eslintrc`.**

	ESLint & Prettier have already been included in the projects devDependencies. Prettier formatting will happen automatically whenever ESLint fix is run, thanks to `eslint-config-prettier`.

	To use ESLint in VSCode, [install the `vscode-eslint` plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) from the VSCode Marketplace. Then use the following settings within your project's `settings.json`:

	```json
	{
		...,
		"files.autoSave": "onFocusChange",
		"eslint.debug": true,
		"editor.codeActionsOnSave": {
			"source.fixAll.eslint": true,
		},
		"eslint.run": "onType",
		...
	}
	```

