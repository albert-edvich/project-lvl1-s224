install:
	npm install

start:
	npm run babel-node -- src/bin/brain-prime.js

build:
	npm run build

publish:
	npm publish

lint:
	npm run eslint .
