install:
	npm install
start2:
	npx babel-node src/bin/games/brain-calc.js
start1:
	npx babel-node src/bin/games/brain-even.js
publish:
	npm publish
lint:
	npx eslint .
