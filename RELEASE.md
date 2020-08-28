## RELEASE PROCESS

# From OpenAPI repositroy automatic pull request

1. if the branch name contains "create-pull-request/patch-",
   then
     1. Identify if the chaing version number was minior or major from the 
        OpenAPI, and decrease the number by 1
     2. git commit --amend the commit message to include either:
        feat: or BREAKING CHANGE:
        if there is a breanking change, for example, from 1.x.x to 2.0.0
        then
           create a new branch to maintain the 1.x.x version
     3. commit the change and merge to master
     
# From contributors

1. double check if the commit messsage follows the guidance addressed in the CONTRIBUTING.md to ensure the version will be correctly bumped and the release notes will be automatically created.
