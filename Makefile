install:
	npm install
start4:
	npx babel-node src/bin/games/brain-progression.js
start3:
	npx babel-node src/bin/games/brain-gcd.js
start2:
	npx babel-node src/bin/games/brain-calc.js
start1:
	npx babel-node src/bin/games/brain-even.js
publish:
	npm publish
lint:
	npx eslint .
