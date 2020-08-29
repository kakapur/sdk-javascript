# RELEASE PROCESS

## From OpenAPI repositroy automatic pull request

if the branch name contains "auto-generated/cr-",
  1. double check the package.json file. The version should be x.x.x
  2. commit the change and merge to master
  3. execute the npm-publish.sh to publish the package to npm registry
  4. create release notes
     
## From contributors

Please double check if the commit messsage follows the guidance addressed in the CONTRIBUTING.md to ensure the version will be correctly bumped and the release notes will be automatically created.
