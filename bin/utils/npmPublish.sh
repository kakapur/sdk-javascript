#!/bin/bash

# used to publish to npm registry when there is a OpenAPI change
cd javascript
npm ci
npm publish
