install:
	npm install
start5:
	npx babel-node src/games/brain-prime.js
start4:
	npx babel-node src/games/brain-progression.js
start3:
	npx babel-node src/games/brain-gcd.js
start2:
	npx babel-node src/games/brain-calc.js
start1:
	npx babel-node src/games/brain-even.js
publish:
	npm publish
lint:
	npx eslint .
