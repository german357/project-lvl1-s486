install:
	npm install
start5:
	npx babel-node src/bin/brain-prime.js
start4:
	npx babel-node src/bin/brain-progression.js
start3:
	npx babel-node src/bin/brain-gcd.js
start2:
	npx babel-node src/bin/brain-calc.js
start1:
	npx babel-node src/bin/brain-even.js
publish:
	npm publish
lint:
	npx eslint .
