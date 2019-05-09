install:
	npm install
start5:
	npx babel-node src/bin/launch_game_prime.js
start4:
	npx babel-node src/bin/launch_game_progression.js
start3:
	npx babel-node src/bin/launch_game_gcd.js
start2:
	npx babel-node src/bin/launch_game_calc.js
start1:
	npx babel-node src/bin/launch_game_even.js
publish:
	npm publish
lint:
	npx eslint .
